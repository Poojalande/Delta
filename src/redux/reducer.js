import {
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGINERROR,
  REGISTERREQUEST,
  REGISTERSUCCESS,
  REGISTERERROR,
  GETSINGLEUSERFAILURE,
  GETSINGLEUSERREQUEST,
  GETSINGLEUSERSUCCESS,
  ALLUSERDATAREQUEST,
  ALLUSERDATASUCCESS,
  ALLUSERDATAFAILURE,
  LOGOUT,
} from './type';

const initialState = {
  loginData: {},
  registerData: {},
  allUserData: {},
  singleUserData: {},
  loading: false,
};

export const crudOperationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINREQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGINSUCCESS:
      return {
        ...state,
        loginData: action.payload,
        loading: false,
      };
    case LOGINERROR:
      return {
        ...state,
        loading: false,
      };
    // register user
    case REGISTERREQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTERSUCCESS:
      return {
        ...state,
        registerData: action.payload,
        loading: false,
      };
    case REGISTERERROR:
      return {
        ...state,
        loading: false,
      };
    // ALL USER DATA
    case ALLUSERDATAREQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALLUSERDATASUCCESS:
      return {
        ...state,
        allUserData: action.payload,
        loading: false,
      };
    case ALLUSERDATAFAILURE:
      return {
        ...state,
        loading: false,
      };
    // single userdata
    case GETSINGLEUSERREQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETSINGLEUSERSUCCESS:
      return {
        ...state,
        singleUserData: action.payload,
        loading: false,
      };
    case GETSINGLEUSERFAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return {
        loginData: {},
        registerData: {},
        allUserData: {},
        singleUserData: {},
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
