import angular from 'angular';

import component from './layout.component';

import home from '../home/home.module';
import users from '../users/users.module';

export default angular
  .module('layout', [
    home,
    users
  ])
  .component('layout', component)
  .name;