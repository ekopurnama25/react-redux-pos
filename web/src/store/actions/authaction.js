import { LOGIN_USERS } from "../constans/usersconstant";
import axios from "../../utils/fetchapi";

export const authusers = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/", data);
    localStorage.setItem("user", JSON.stringify(res.data));

    dispatch({
      type: LOGIN_USERS,
      payload: res.payload.user,
    });
  } catch (err) {
    console.log(err);
  }
};
