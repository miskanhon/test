import angular from 'angular';
import component from './home.component';

export default angular
  .module('home', [])
  .component('home', component)
  .config(($stateProvider) => {
    let home = {
      name: '/',
      url: '/',
      component: 'home'
    };
    $stateProvider.state(home);
  })
  .name;