export const RECEIVE_QUETIONS = 'RECEIVE_QUETIONS'

export function receiveQuestions(quetions){
    return{
        type: RECEIVE_QUETIONS,
        quetions,
    }
}