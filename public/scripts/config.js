import homeTpl from '../states/home.html';
import hangmanTpl from '../states/hangman.html';
import winTpl from '../states/win.html';
import looseTpl from '../states/loose.html';

export default ($stateProvider, $urlRouterProvider) => {
  'ngInject';
  let home = {
    name: 'home',
    url: '/',
    templateUrl: homeTpl
  };

  let hangman = {
    name: 'hangman',
    url: '/hangman',
    templateUrl: hangmanTpl
  };

  let loose = {
    name: 'loose',
    url: '/loose',
    templateUrl: looseTpl
  };

  let win = {
    name: 'win',
    url: '/win',
    templateUrl: winTpl
  };

  $stateProvider
    .state(home)
    .state(hangman)
    .state(loose)
    .state(win);

  $urlRouterProvider.otherwise('/');
};