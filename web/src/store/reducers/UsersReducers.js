import {
  ADD_USERS,
  DELETE_USERS,
  GET_USERS,
  GET_ID_USERS,
  UPDATE_USERS,
} from "../constans/usersconstant";

const defaultState = {
  user: {},
  users: [],
  counter: 10,
};

const UsersReducers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      let newUSers = action.payload;
      return {
        ...state,
        users: newUSers,
      };

    case ADD_USERS:
      return {
        ...state,
        users: newUSers.users,
      };

    case DELETE_USERS:
      return {
        ...state,
        user: newUSers.users,
      };

    case GET_ID_USERS:
      return {
        ...state,
        user: newUSers.users,
      };

    case UPDATE_USERS:
      return {
        ...state,
        user: newUSers.users,
      };

    default:
      return state;
  }
};

export default UsersReducers;
