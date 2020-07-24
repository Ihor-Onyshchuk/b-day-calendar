import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0',
});