import axios from "axios";
import { BASE_URL } from "./API_BASE_URL";

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


export const LoginCooperative = async (payload) => {

  const endpoint = "/login";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;

  }
};


export const ForgetPassword = async (payload) => {

  const endpoint = "/cooperative/forgotPassword";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;

  }
};


export const ResetPassword = async (payload) => {

  const endpoint = "/cooperative/resetPassword";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;

  }
};