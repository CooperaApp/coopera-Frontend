import axios from "axios";
import { BASE_URL } from "./API_BASE_URL";

export const GenerateInviteLink = async (recipientEmail) => {
  const endpoint = "/admin/generateLink";
  const URL = `${BASE_URL}${endpoint}`;

  console.log("Recipient Email => ", recipientEmail);

  try {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };

    console.log("Headers => ", headers);
    const response = await axios.post(URL, { recipientEmail: recipientEmail }, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};
