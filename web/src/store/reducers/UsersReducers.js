import { get_users } from "../constans/usersconstant";

const defaultState = {
  users: [],
  counter: 10,
};

const UsersReducers = (state = defaultState, action) => {
  switch (action.type) {
    case get_users:
      let newUSers = action.payload;
      return {
        ...state,
        users: newUSers,
      };
    default:
      return state;
  }
};

export default UsersReducers;
