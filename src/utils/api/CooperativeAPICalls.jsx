import axios from "axios";

import { BASE_URL } from "./API_BASE_URL";
// console.log( "this is base url: ",BASE_URL);


export const RegisterCooperative = async (payload) => {
  const endpoint = "/api/v1/cooperative/register";
  const URL = `${BASE_URL}${endpoint}`;


  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

// export const LoginCooperative = async (payload) => {
//   const endpoint = "/login";
//   const URL = `${BASE_URL}${endpoint}`;

//   try {
//     console.log('payload: ', payload);
//     const response = await axios.post(URL, payload);
   
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

export const ForgetPassword = (payload) => {
  const endpoint = "/cooperative/forgotPassword";
  const URL = `${BASE_URL}${endpoint}`;

  return axios
    .post(URL, { email: payload })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const ResetPassword = (payload) => {
  const endpoint = "/cooperative/resetPassword";
  const URL = `${BASE_URL}${endpoint}`;

  const headers = {
    Authorization: `Bearer ${payload.token}`,
  };

  const requestBody = {
    newPassword: payload.newPassword,
    confirmPassword: payload.confirmPassword,
    token: payload.token,
  };

  return axios
    .post(URL, requestBody, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

