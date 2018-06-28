import axios from "axios";
import { GET_ERRORS } from "./types";

// Register User
export const registerUser = (userData, history) => disptach => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      disptach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
