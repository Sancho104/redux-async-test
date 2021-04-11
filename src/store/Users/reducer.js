import { actionTypes } from './actions';

const initialState = {
    error: false,
    users: {},
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USERS_SUCCESS:
            return {
                users: action.users,
                error: false,
            }
        case actionTypes.USERS_FAIL:
            return {
                error: true,
                users: {},
            }
        default:
            return state;
    }
}

export default usersReducer;