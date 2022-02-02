import { get_users } from "../constans/usersconstant";
import URL from "../../utils/fetchapi";

export const getUsers = () => {
  try {
    return async (dispatch) => {
      const res = await URL.get("/users");
      dispatch({
        type: get_users,
        payload: res.data.data.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const createUsers = () => {};
