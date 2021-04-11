import axios from "axios";
import { createSelector } from "reselect";
import { usersSelector } from "./Users/selectors";

const actionTypes = {
    POSTS_SUCCESS: 'POSTS_SUCCESS',
    POSTS_FAIL: 'POSTS_FAIL',

}

export function getPosts() {
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

const postsSelector = state => state.reducePosts.posts;

export const postsWithUserSelector = createSelector(
    [postsSelector, usersSelector],
    (posts, users) => {
        if (!Object.keys(users).length) {
            return [];
        }
        return posts.map((post) => {
            const newPost = { ...post, user: users[post.userId] }
            return newPost;
        })
    })

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