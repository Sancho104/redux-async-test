import { actionTypes } from './actions';

const ititialstate = {
    error: false,
    posts: []
}

export const postsReducer = (state = ititialstate, action) => {
    switch (action.type) {
        case actionTypes.POSTS_SUCCESS:
            return {
                posts: action.result,
                error: false,
            }
        case actionTypes.POSTS_FAIL:
            return {
                error: true,
                posts: [],
            }
        default:
            return state;

    }
}