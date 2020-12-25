export const LOGIN = "LOGIN";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

import { AsyncStorage } from "react-native";
import {Api} from '../../ServerLink/Server'



// demo Login starts here

export const LoginUser = (email, password) => {
  return async (dispatch) => {
    console.log(email)
    const response = await fetch(`${Api}api/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const resData = await response.json();
    console.log('response')
    console.log(resData);
    // console.log(resData.success);

    if (resData.result === 'error') {
      throw new Error(resData.message);
    }


    dispatch({
      type: LOGIN,
      Login: resData.response,
    });
    saveDataToStorage(resData.response);
  };
};





export const LogoutFunc = () => {
  return async (dispatch, getState) => {
    const token = getState().Auth.Login.token
  
    try {
      const response = await fetch(`${Api}api/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },

      });

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const resData = await response.json();
    

      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  };
};






// demo Login starts here

export const Authenticate = (resData) => {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      Login: resData,

    });
  };
};

const saveDataToStorage = (userData) => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        userData: userData,
      })
    );
  };
  