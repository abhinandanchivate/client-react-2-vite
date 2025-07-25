import api from "../../../utils/axiosInstance";

// registerAction : is responsible for performing the registration of a user and it will perform the rest call.
export const registerAction =
  (userName, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "USER_REGISTER_REQUEST",
      });
      api
        .post("/users/register", {
          username: userName,
          email,
          password,
        })
        .then((response) => {
          dispatch({
            type: "USER_REGISTER_SUCCESS",
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "USER_REGISTER_FAIL",
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAIL",
        payload: error.message || "An error occurred during registration.",
      });
    }
  };

export const loginAction = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    api
      .post("/users/login", {
        email,
        password,
      })
      .then((response) => {
        dispatch({
          type: "USER_LOGIN_SUCCESS",
          payload: response.data,
        });
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch({
          type: "USER_LOGIN_FAIL",
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error.message || "An error occurred during login.",
    });
  }
};

// /api/v1/users/me
export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOADED",
    });
    api
      .get("/users/me")
      .then((response) => {
        dispatch({
          type: "USER_LOADED",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "USER_LOAD_FAIL",
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: "USER_LOAD_FAIL",
      payload: error.message || "An error occurred while loading user details.",
    });
  }
};
