import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'
import { ADD_USER_QUESTION } from '../actions/users';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: question,
            }
        
        default:
            return state
    }
}