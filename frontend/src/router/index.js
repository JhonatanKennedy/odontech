import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/user/User.vue';
import Admin from '../views/admin/Admin.vue';
import CreateRecord from '../components/createRecords.vue';
import ListRecords from '../components/listRecords.vue';
import EditRecord from '../components/editRecords.vue';
import ListRecordsUser from '../components/listRecordsUser.vue';
import EditUser from '../components/editUser.vue';
import recordUser from '../components/recordUser.vue';
import createUser from '../components/createUser.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/createRecord/:id',
    name: 'RecordCreate',
    component: CreateRecord,
  },
  {
    path: '/admin/listRecords/:id',
    name: 'RecordsList',
    component: ListRecords,
  },
  {
    path: '/admin/listRecords/record/:id',
    name: 'RecordEdit',
    component: EditRecord,
  },
  {
    path: '/user/recordsList/:id',
    name: 'UserRecordList',
    component: ListRecordsUser,
  },
  {
    path: '/user/edit/:id',
    name: 'UserEdit',
    component: EditUser,
  },
  {
    path: '/user/recordsList/record/:id',
    name: 'RecordUser',
    component: recordUser,
  },
  {
    path:'/register',
    name: 'CreateUser',
    component: createUser
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
