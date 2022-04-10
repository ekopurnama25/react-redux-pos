import {
  ADD_USERS,
  DELETE_USERS,
  GET_USERS,
  GET_ID_USERS,
  UPDATE_USERS,
} from "../constans/usersconstant";
import axios from "../../utils/fetchapi";

export const getUsers = () => {
  try {
    return async (dispatch) => {
      const res = await axios.get("/users/");

      dispatch({
        type: GET_USERS,
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
      const res = await axios.post("/create/", data);
      dispatch({
        type: ADD_USERS,
        payload: res.users.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsers = (id) => {
  try {
    return async (dispatch) => {
      const res = await axios.delete(`/users/${id}`);
      dispatch({
        type: DELETE_USERS,
        payload: res.users,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getIdUsers = (id) => {
  try {
    return async (dispatch) => {
      const res = await axios.get(`/users/${id}`);
      dispatch({
        type: GET_ID_USERS,
        payload: res.data.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUsersID = (id, data) => {
  try {
    return async (dispatch) => {
      const res = await axios.put(`/users/${id}`, data);
      console.log(res);
      dispatch({
        type: UPDATE_USERS,
        payload: res.users ,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
