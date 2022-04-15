import { LOGIN_USERS } from "../constans/usersconstant";

let user = JSON.parse(localStorage.getItem("users"));

const defaultState = {
  user,
};
const AuthReducers = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USERS:
      return {
        ...state,
        users: action.user,
      };

    default:
      return state;
  }
};

export default AuthReducers;
