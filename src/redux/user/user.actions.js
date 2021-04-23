import { UserActionTypes } from './user.types'

// this is an action that is parsed into the user.reducer
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})