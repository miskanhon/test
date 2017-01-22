import angular from 'angular';

import component from './users.component';
import UsersService from './users.service';
import UsersFilter from './users.filter';

export default angular
  .module('users', [])
  .component('users', component)
  .service('UsersService', UsersService)
  .filter('byGender', UsersFilter)
  .config(($stateProvider, $urlRouterProvider) => {
    let users = {
      name: 'users',
      url: '/users',
      component: 'users',
      resolve: {
        users: (UsersService) => {
          'ngInject';
          return UsersService.getData();
        }
      }
    };
    $stateProvider.state(users);
    $urlRouterProvider.otherwise('/');
  })
  .name;