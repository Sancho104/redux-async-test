import { getUsersApi } from './api';

export const actionTypes = {
    COMMENTS_SUCCESS: 'COMMENTS_SUCCESS',
    COMMENTS_SUCCESS_FAIL: 'COMMENTS_FAIL',
    COMMENTS_REQUEST: 'COMMENTS_REQUEST',
}

export function getComments(id) {
    return dispatch => {
        dispatch({
            type: actionTypes.COMMENTS_REQUEST,
        })
        getUsersApi(id)
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
        type: actionTypes.COMMENTS_SUCCESS,
        result,
    }
}

const requestFail = () => {
    return {
        type: actionTypes.COMMENTS_FAIL,
    }
}
