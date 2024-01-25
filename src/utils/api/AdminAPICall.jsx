import axios from "axios";
import { BASE_URL } from "./APIConstant";

export const generateInviteLink = async (payload) => {

  const endpoint = "/api/v1/admin/generateLink";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    return error.response;

  }
};