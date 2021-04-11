import axios from 'axios';

export const getUsersApi = () => axios.get('https://jsonplaceholder.typicode.com/users');