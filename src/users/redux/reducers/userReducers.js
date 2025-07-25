// src/features/user/userReducer.js

import {
  USER_LOAD_FAIL,
  USER_LOADED,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../types/types";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  token: localStorage.getItem("token") || null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, error: null };
    case USER_REGISTER_FAIL:
    case USER_LOAD_FAIL:
      return {
        loading: false,
        token: null,
        userInfo: null,
        error: action.payload,
      };
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, token: action.payload.token, error: null };
    case "USER_LOGIN_FAIL":
      return { loading: false, token: null, error: action.payload };
    case USER_LOADED:
      return { ...state, loading: false, userInfo: action.payload };
    default:
      return state;
  }
};

export default userReducer;
