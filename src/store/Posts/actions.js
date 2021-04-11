import { getPostsApi } from './api';

export const actionTypes = {
    POSTS_SUCCESS: 'POSTS_SUCCESS',
    POSTS_FAIL: 'POSTS_FAIL',
}

export function getPosts() {
    return dispatch => {
        getPostsApi()
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
