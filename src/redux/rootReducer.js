import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../users/redux/reducers/userReducers";

const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
});
export default rootReducer;
