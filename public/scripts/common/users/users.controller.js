export default class UsersController {
  constructor () {
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
    console.log(this.users[3]);
  }
}