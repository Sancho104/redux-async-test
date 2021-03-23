import axios from "axios";

const actionTypes = {
    USERS_SUCCESS: 'USERS_SUCCESS',
    USERS_FAIL: 'USERS_FAIL',
    USER_ITEM: 'USER_ITEM',
}

export function crateActionUserItem(item) {
    console.log('user retun')
    return {
        type: actionTypes.USER_ITEM,
        item
    }
}

export function createActionPosts() {
    console.log('create action user');
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

const requestSuccess = (result) => {
    let map = new Map();
    result.map(item => map.set(item.id, item));
    let obj = Object.fromEntries(map);
    return {
        type: actionTypes.USERS_SUCCESS,
        result: obj,

    }
}

const requestFail = (error) => {
    return {
        type: actionTypes.USERS_FAIL,
    }
}

const ititialstate = {
    error: false,
    // users: new Map(),
    users: {},
}

export const reduceUsers = (state = ititialstate, action) => {
    switch (action.type) {
        case actionTypes.USERS_SUCCESS:
            console.log(action.result);
            return {
                users: action.result,
                error: false,
            }
        case actionTypes.USERS_FAIL:
            return {
                error: true,
                users: [],
            }
        case actionTypes.USER_ITEM:
            let newState = { ...state, item: action.item, error: false }
            return newState;
        default:
            return state;

    }
}