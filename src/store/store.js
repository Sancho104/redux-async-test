import axios from "axios";

const POSTS = 'POSTS';
const COMMENTS = 'COMMENTS';


export function createActionPosts() {
    console.log('create action post')
    return {
        type: POSTS,
    }
}

export function createActionComments(text) {
    return {
        type: POSTS,
        text: text
    }
}



export function getState( action) {
    let state = axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('getState')
    // debugger
    if (action.type == POSTS) {
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (responce) {
                // console.log(responce)
                return state = responce
            });
            // debugger;
    }
    if (action.type == COMMENTS) {
        // debugger
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + action.text)
            .then(function (responce) {
                return state = responce;
            });
    }
    return state;
}