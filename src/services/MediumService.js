import axios from 'axios';
import config from '../../json/backend.json';

const apiClient = axios.create({
  baseURL: config.api.heroku,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default {
  getPosts() {
    return apiClient.get('/post');
  }
};
