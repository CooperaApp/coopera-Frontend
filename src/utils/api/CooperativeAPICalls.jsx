import axios from "axios";
import { BASE_URL } from "./APIConstant.jsx";
console.log( "this is base url: ",BASE_URL);
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

export const FindByCooperativeId = async (cooperativeId) => {
  const endpoint = `/findByCooperativeId/${cooperativeId}`;
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    return error.response;
  }
};



export const FindByCooperativeIdAndStatus = async (cooperativeId) => {
  const endpoint = `/savings/findByCooperativeIdAndStatus/SUCCESSFUL?cooperativeId=${cooperativeId}`;
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    return error.response;
  }
};


