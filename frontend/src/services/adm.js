import { http } from './config';

export default {
  getUsers:() => {
    return http.get('/adm/users/:id');
  }
}