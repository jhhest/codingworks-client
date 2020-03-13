const initialState = {
  firstName: "",
  lastName: "",
  telephoneNumber: null,
  userId: null,
  dateOfBirth: null,
  email: "",
  Authorization: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "login/LOGIN": {
      const {
        firstName,
        lastName,
        telephoneNumber,
        userId,
        dateOfBirth,
        email,
        jwt
      } = action.payload;
      return {
        firstName,
        lastName,
        telephoneNumber,
        userId,
        dateOfBirth,
        email,
        Authorization: `Bearer ${jwt}`
      };
    }
    default: {
      return state;
    }
  }
}
