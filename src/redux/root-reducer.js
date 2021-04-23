// library imports
import {combineReducers} from 'redux';

// redux imports
import userReducer from './user/user.reducer';

// combineReduers simply combines every reducer into one
export default combineReducers({
    user: userReducer
});