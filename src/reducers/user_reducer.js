import produce from "immer";

const initState = {
  token: localStorage.getItem("token") || null,
  avatar: "",
  introduction: "",
  name: "",
  roles: [],
  userInfo: {},
  accessRoutes: [],
};
function user_reducer(preState = initState, { type, payload }) {
  return produce(preState, (newState) => {
    switch (type) {
      case "USER_LOGIN":
        localStorage.setItem("token", payload);
        newState.token = payload;
        break;
      case "USER_INFO":
        const { avatar, introduction, name, roles } = payload;
        newState.avatar = avatar;
        newState.introduction = introduction;
        newState.name = name;
        newState.roles = roles;
        break;
        case "USER_PERMISSION":
        newState.accessRoutes = payload;
      default:
        break;
    }
  });
}

export default user_reducer;
