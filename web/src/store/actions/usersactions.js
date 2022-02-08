import { add_users, delete_users, get_users } from "../constans/usersconstant";
import URL from "../../utils/fetchapi";

export const getUsers = () => {
  try {
    return async (dispatch) => {
      const res = await URL.get("/users/");
      dispatch({
        type: get_users,
        payload: res.data.data.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const createUsers = (data) => {
  try {
    return async (dispatch) => {
      const res = await URL.post("/create/", data);
      console.log(res);
      dispatch({
        type: add_users,
        payload: res.users.data,
      });
      Promise.resolve(res.users.data);
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsers = (id) => {
  try {
    return async (dispatch) => {
      const res = await URL.delete(`/users/${id}`);
      console.log(res);
      dispatch({
        type: delete_users,
        payload: res.users,
      });
      Promise.resolve(res.users);
    };
  } catch (err) {
    console.log(err);
  }
};
