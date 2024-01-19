import axios from "axios";
import { BASE_URL } from "./APIConstant";

export const RegisterMember = async (payload) => {

  const endpoint = "/api/v1/member/register";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;

  }
};


export const LoginMember = async (payload) => {

  const endpoint = "/login";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};