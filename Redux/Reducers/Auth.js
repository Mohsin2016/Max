import {LOGIN,AUTHENTICATE,LOGOUT} from '../Actions/Auth'


const initialState = {
  Login: {},
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        Login: action.Login,
      };
      case AUTHENTICATE:
        return {
          ...state,
          Login: action.Login,
        };
        case LOGOUT:
          return {
            ...state,
            Login: {},
          };

   
  }
  return state;
};
