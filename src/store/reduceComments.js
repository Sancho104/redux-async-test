import axios from "axios";

const actionTypes = {
    COMMENTS_SUCCESS: 'COMMENTS_SUCCESS',
    COMMENTS_SUCCESS_FAIL: 'COMMENTS_FAIL',
    COMMENTS_REQUEST: 'COMMENTS_REQUEST',
}

export function createActionComments(id) {
    return dispatch => {
        dispatch({
            type: actionTypes.COMMENTS_REQUEST,
        })
        axios.get('https://jsonplaceholder.typicode.com/comments',
            {
                params: {
                    postId: id,
                }
            })
            .then(res => {
                dispatch(requestSuccess(res.data));
            })
            .catch(err => {
                dispatch(requestFail(err));
                console.log(err.message);
            })
    }
}

const requestSuccess = (result) => {
    return {
        type: actionTypes.COMMENTS_SUCCESS,
        result,
    }
}

const requestFail = (error) => {
    return {
        type: actionTypes.COMMENTS_FAIL,
    }
}

const ititialstate = {
    error: false,
    comments: [],
    loading: false,
}

export const reduceComments = (state = ititialstate, action) => {
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