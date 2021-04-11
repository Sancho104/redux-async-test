import { getUsersApi } from './api';

export const actionTypes = {
    USERS_SUCCESS: 'USERS_SUCCESS',
    USERS_FAIL: 'USERS_FAIL',
}

export function getUsers() {
    return dispatch => {
        getUsersApi()
            .then(res => {
                dispatch(requestSuccess(res.data));
            })
            .catch(err => {
                dispatch(requestFail(err));
                console.log(err.message);
            })
    }
}

const requestSuccess = (usersArray) => {
    const users = {};
    usersArray.forEach(item => {
        users[item.id] = item;
    });
    return {
        type: actionTypes.USERS_SUCCESS,
        users,
    }
}

const requestFail = () => {
    return {
        type: actionTypes.USERS_FAIL,
    }
}
