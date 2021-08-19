import { http } from './config';
export default {
  getMedicalRecords(userId){
    return http.get(`/user/${userId}`);
  },

  getUser(userId){
    return http.get(`/user/users/${userId}`)
  },

  editUser(data, userId){
    return http.put(`/user/${userId}`, data);
  },
  createUser(data){
    return http.post('/user',data);
  }

}