import angular from 'angular';

import appNav from './appNav/appNav.module';

export default angular
  .module('component', [
    appNav
  ])
  .name;