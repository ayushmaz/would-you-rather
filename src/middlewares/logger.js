const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action is : ', action)
        const returnVal = next(action)
        console.log('The state is : ' , store.getState())
    console.groupEnd()
    return returnVal
}

export default logger