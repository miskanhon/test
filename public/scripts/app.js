import angular from 'angular';
import UIRouter from 'angular-ui-router';

import CommonModule from './common/common.module';
import ComponentModule from './component/component.module';

import 'bootstrap/dist/css/bootstrap.css';
import '../sass/main.scss';

angular
  .module('app', [
    UIRouter,
    CommonModule,
    ComponentModule
  ]);