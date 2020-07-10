import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'
import * as firebase from 'firebase'



let users = {}
let questions = {}

export async function getInitialData() {
    var database = firebase.firestore()
    await database.collection('users').get()
        .then((querySnapshot) => {
            //console.log("query" , querySnapshot)
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                users = {
                    ...users,
                    [doc.id]: doc.data()
                }
            });
        });

    await database.collection('questions').get()
        .then((querySnapshot) => {
            //console.log("query" , querySnapshot)
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                questions = {
                    ...questions,
                    [doc.id]: doc.data()
                }
            });
        });


    return {
        users,
        questions
    }
    

}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}

export function addQuestionToDB(question) {
    var database = firebase.firestore()
    console.log("question", question)
    database.collection("questions").doc(question.id).set(question)
        .then(function () {
            console.log("Document successfully written!");
            alert("Question added successfully")
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

}


export async function addUserToDB(user) {
    var database = await  firebase.firestore()
    database.collection("users").doc(user.id).set(user)
        .then(function () {
            console.log("Document successfully written!");
            alert("User added successfully")
        })
        .catch(function (error) {
            console.log("Error writing document: ", error);
        });
}

export function addQuestionToUsersdb(authedUser, id) {
    var db = firebase.firestore()
    var userRef = db.collection('users').doc(authedUser);
    userRef.get().then(doc => {
        const questionList = doc.data().questions
        userRef.set({
            questions: questionList.concat([id])
        }, { merge: true })
    })
}

export function addQuestionAnswerToDB(authedUser, id, option) {
    var db = firebase.firestore()
    var questionRef = db.collection('questions').doc(id);
    questionRef.get().then(doc => {
        var voteList = doc.data()[option].votes
        //console.log(voteList , "votelist")
        questionRef.set({
            [option]: {
                votes: voteList.concat([authedUser])
            }
        }, { merge: true })
    })

}

export function addUserAnswerToDB(authedUser, id, option) {
    var db = firebase.firestore()
    var userRef = db.collection('users').doc(authedUser);
    userRef.get().then(doc => {
        let answerList = doc.data().answers

        answerList = {
            ...answerList,
            [id]: option
        }
        //console.log(answerList , "answerList")
        userRef.set({
            answers: answerList
        }, { merge: true })
    })
}