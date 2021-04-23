import {UserActionTypes} from './user.types';

// Initial state works like this.state does. Thisis where variables such as currentUser are instantiated.
const INITIAL_STATE = {
    currentUser: null
}

// UserReducer takes two inputs: state and action
const userReducer = (state = INITIAL_STATE, action) => {
    // Depending on the action type, different things will happen
    switch (action.type) {
        // SET_CURRENT_USER for example, sets the current user to the payload of the action input
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        // Otherwise, the state is returned as is.
        default:
            return state;
    }
}

export default userReducer;