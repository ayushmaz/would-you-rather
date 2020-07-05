import { _saveQuestion, _saveQuestionAnswer, formatQuestion } from "../utils/_DATA"
import { addUserQuestion, addUserAnswer } from "./users"
import { addQuestionToDB, addQuestionToUsersdb, addQuestionAnswerToDB, addUserAnswerToDB } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function addQuestionAnswer(authedUser, id, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        id,
        answer
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const formattedQuestion = formatQuestion({ author: authedUser, optionOneText, optionTwoText })
        console.log(formattedQuestion)
        addQuestionToDB(formattedQuestion)
        addQuestionToUsersdb(authedUser , formattedQuestion.id)
        dispatch(addQuestion(formattedQuestion))
        dispatch(addUserQuestion(authedUser, formattedQuestion.id))
    }
}

// export function handleAddQuestion(optionOneText, optionTwoText) {
//     return (dispatch, getState) => {
//         const { authedUser } = getState()

//         return _saveQuestion({
//             author: authedUser,
//             optionOneText,
//             optionTwoText,
//         })
//             .then((question) => {
//                 console.log("question action" , question)
//                 dispatch(addQuestion(question));
//                 dispatch(addUserQuestion(authedUser, question.id))
//             })

//     }
// }


export function handleAddAnswer(qid, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        addQuestionAnswerToDB(authedUser, qid, option)
        addUserAnswerToDB(authedUser, qid, option)
        dispatch(addQuestionAnswer(authedUser, qid, option));
        dispatch(addUserAnswer(authedUser, qid, option))
    }
}

// export function handleAddAnswer(qid, option) {
//     return (dispatch, getState) => {
//         const { authedUser } = getState();
//         const info = {
//             authedUser: authedUser,
//             qid,
//             answer: option
//         }
//         _saveQuestionAnswer(info).then(() => {
//                 dispatch(addQuestionAnswer(authedUser, qid, option));
//                 dispatch(addUserAnswer(authedUser, qid, option))
//             })
//     }
// }