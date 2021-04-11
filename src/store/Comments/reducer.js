import { actionTypes } from './actions';

const ititialstate = {
    error: false,
    comments: [],
    loading: false,
}

export const commentsReducer = (state = ititialstate, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_REQUEST:
            return {
                ...state, loading: true
            }
        case actionTypes.COMMENTS_SUCCESS:
            return {
                comments: action.result,
                error: false,
                loading: false,
            }
        case actionTypes.COMMENTS_FAIL:
            return {
                error: true,
                loading: false,
            }
        default:
            return state;

    }
}