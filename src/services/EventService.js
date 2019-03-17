import axios from 'axios';
import config from '../../json/backend.json';

const apiClient = axios.create({
    baseURL: config.api.localhost,
    withCredentials: false,
    headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
  getEvents(){
    return apiClient.get('/events')
  },
  getEvent(id){
    return apiClient.get('/events/' + id)
  },
  postEvent(event){
    return apiClient.post('/events', event)
  }
}

