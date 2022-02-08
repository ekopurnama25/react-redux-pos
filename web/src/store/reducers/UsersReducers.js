import { get_users, add_users, delete_users } from "../constans/usersconstant";

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

    case add_users:
      return { ...state, users: newUSers.users };

    case delete_users:
      return { ...state, users: newUSers.users };

    default:
      return state;
  }
};

export default UsersReducers;
