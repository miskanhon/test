export default class UsersService {
  constructor ($log, $http) {
    this.$log = $log;
    this.$http = $http;
  }

  getData () {
    return this.$http
                .get('./datas/users.json')
                .then(({data}) => {
                  return data;
                })
                .catch((reason) => {
                  this.$log.log(reason);
                });
  }
}