import angular from 'angular';

import component from './contact.component';

export default angular
  .module('contact', [])
  .component('contact', component)
  .config(($stateProvider, $urlRouterProvider) => {
    let contact = {
      name: 'contact',
      url: '/contact',
      component: 'contact'
    };
    $stateProvider.state(contact);
    $urlRouterProvider.otherwise('/');
  })
  .name;