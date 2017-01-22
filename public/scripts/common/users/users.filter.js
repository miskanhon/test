export default () => {
  return (list, param) => {
    if (param) {
      return list.filter((user) => {
        return user.gender.toLowerCase() === param.toLowerCase();
      });
    } else {
      return list;
    }
  };
};