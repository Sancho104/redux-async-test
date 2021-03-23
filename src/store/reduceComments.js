import axios from "axios";

const actionTypes = {
    COMMENTS_SUCCESS: 'COMMENTS_SUCCESS',
    COMMENTS_SUCCESS_FAIL: 'COMMENTS_FAIL',

}

export function createActionComments(id) {
    console.log('create action post')
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments',
            {
                params: {
                    postId: id,
                }
            })
            .then(res => {
                console.log(res.data);
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
    comments: []
}

export const reduceComments = (state = ititialstate, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_SUCCESS:
            return {
                comments: action.result,
                error: false,
            }
        case actionTypes.COMMENTS_FAIL:
            return {
                error: true,
                poscommentsts: [],
            }
        default:
            return state;

    }
}