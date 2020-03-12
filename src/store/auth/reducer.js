const initialState = {
    jobApplicantName: null,
    jwt: null, 
    email: null,
    userId: null
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "login/LOGIN": {
        const { fullName, email, jwt, userId } = action.payload;
        return {
          jobApplicantName: fullName,
          jwt,
          email,
          userId, 
          Authorization: `Bearer ${jwt}`
        };
      }
      default: {
        return state;
      }
    }
  }