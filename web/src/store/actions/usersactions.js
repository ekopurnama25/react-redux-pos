import {
  ADD_USERS,
  DELETE_USERS,
  GET_USERS,
  GET_ID_USERS,
  UPDATE_USERS,
} from "../constans/usersconstant";
import axios from "../../utils/fetchapi";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users/");
    dispatch({
      type: GET_USERS,
      payload: res.data.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createUsers = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/create/", data);
    dispatch({
      type: ADD_USERS,
      payload: res.users.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/users/${id}`);
    dispatch({
      type: DELETE_USERS,
      payload: res.users,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getIdUsers = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/users/${id}`);
    dispatch({
      type: GET_ID_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUsersID = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/users/${id}`, data);
    console.log(res);
    dispatch({
      type: UPDATE_USERS,
      payload: res.users,
    });
  } catch (err) {
    console.log(err);
  }
};
