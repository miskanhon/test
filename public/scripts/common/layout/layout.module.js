import angular from 'angular';

import component from './layout.component';

import home from '../home/home.module';
import users from '../users/users.module';
import contact from '../contact/contact.module';

export default angular
  .module('layout', [
    home,
    users,
    contact
  ])
  .component('layout', component)
  .name;