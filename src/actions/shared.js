import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import {showLoading , hideLoading} from 'react-redux-loading'
import { setAuthedUser } from './authedUser'
import {getInitialData} from '../utils/api'


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, quetions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(quetions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })

    }
}

