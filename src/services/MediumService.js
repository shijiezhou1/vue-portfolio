import axios from 'axios';
import config from '../../json/backend.json';

const apiClient = axios.create({
    baseURL: config.api.heroku,
    withCredentials: false,
    headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout:10000
})

export default {
  getPosts(){
    //TODO change API to posts
    return apiClient.get('/post')
  },
  getPost(id){
    return apiClient.get('/post/' + id)
  }
}

