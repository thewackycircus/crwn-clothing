// this is an action that is parsed into the user.reducer
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})