import axios from 'axios';

export const getPostsApi = () => axios.get('https://jsonplaceholder.typicode.com/posts');