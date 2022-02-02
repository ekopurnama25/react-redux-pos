import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UsersReducers } from "./reducers";

const reducers = combineReducers({
  listUsers: UsersReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
