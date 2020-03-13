import axios from "../../axiosInstance";

export const login = (email, password, history) => {
  return (dispatch, getState) => {
    console.log("actioncreator login is being called!")
    axios
      .post("/auth/login", {
        email,
        password
      })
      .then(
        ({
          data: {
            firstName,
            lastName,
            telephoneNumber,
            userId,
            dateOfBirth,
            email,
            jwt
          }
        }) => {
          dispatch({
            type: "login/LOGIN",
            payload: {
              firstName,
              lastName,
              telephoneNumber,
              userId,
              dateOfBirth,
              email,
              jwt
            }
          });
          history.push("/profile");
        }
      )
      .catch(error => console.error(error));
  };
};
