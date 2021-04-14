import axios from 'axios';

export const getUsersApi = (id) => axios.get('https://jsonplaceholder.typicode.com/comments',
    {
        params: {
            postId: id,
        }
    });