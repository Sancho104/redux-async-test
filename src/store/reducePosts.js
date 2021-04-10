import axios from "axios";

const actionTypes = {
    POSTS_SUCCESS: 'POSTS_SUCCESS',
    POSTS_FAIL: 'POSTS_FAIL',

}

export function createActionPosts() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch(requestSuccess(res.data));
            })
            .catch(err => {
                dispatch(requestFail(err));
            })
    }
}

const requestSuccess = (result) => {
    return {
        type: actionTypes.POSTS_SUCCESS,
        result,
    }
}

const requestFail = (error) => {
    return {
        type: actionTypes.POSTS_FAIL,
    }
}

const ititialstate = {
    error: false,
    posts: []
}

export const reducePosts = (state = ititialstate, action) => {
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