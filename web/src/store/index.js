import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UsersReducers, AuthReducers } from "./reducers";

const reducers = combineReducers({
  listUsers: UsersReducers,
  AuthUsers: AuthReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
