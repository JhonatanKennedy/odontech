import { http } from './config';

export default {
  getUsers:() => {
    return http.get('/adm/users/all');  
  },
  listRecords:(userId) => {
    return http.get(`/adm/user/${userId}`);
  },
  createRecord: (data, userId) => {
    return http.post(`/adm/user/${userId}`, data);
  },
  editRecord:(data, userId) => {
    return http.put(`/adm/user/${userId}`, data);
  }
}