import axios from "axios";

const actionTypes = {
    USERS_SUCCESS: 'USERS_SUCCESS',
    USERS_FAIL: 'USERS_FAIL',
    USER_ITEM: 'USER_ITEM',
}

export function crateActionUserItem(post) {
    console.log(post)
    return {
        type: actionTypes.USER_ITEM,
        post
    }
}

export function createActionUsers() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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

const requestFail = (error) => {
    return {
        type: actionTypes.USERS_FAIL,
    }
}

const ititialstate = {
    error: false,
    users: {},
}

export const reduceUsers = (state = ititialstate, action) => {
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
        case actionTypes.USER_ITEM:
            console.log(action);
            let newState = { ...state, item: action.post, error: false }
            return newState;
        default:
            return state;

    }
}