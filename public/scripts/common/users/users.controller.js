export default class UsersController {
  constructor ($filter) {
    'ngInject';
    this.$filter = $filter;
    this.search = {
      fullname: '',
      gender: ''
    };
  }

  $onInit () {
    this.modifyData();
  }

  modifyData () {
    this.users = this.users.map((user) => {
      user.fullname = `${user.first_name} ${user.last_name}`;
      return user;
    });
  }
}