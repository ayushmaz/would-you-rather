import { RECEIVE_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.id])
                }
            };

        case ADD_USER_ANSWER:
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