import { RECEIVE_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER, ADD_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case ADD_USER_QUESTION:
            console.log(action.authedUser)
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.id])
                }
            };

        case ADD_USER:
            const {user} = action
            return{
                ...state,
                [user.id] :{
                    ...user
                }
            }

        case ADD_USER_ANSWER:
            console.log(action.authedUser)
            return {
                ...state, [action.authedUser]: {
                    ...state[action.authedUser],
                    answers : {
                        ...state[action.authedUser].answers,
                        [action.id]: action.option
                    }
                }
            }
        default:
            return state
    }
}