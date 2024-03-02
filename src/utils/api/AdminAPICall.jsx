import axios from "axios";
import { BASE_URL } from "./API_BASE_URL";

export const GenerateInviteLink = async (recipientEmail) => {
  const endpoint = "/api/v1/admin/generateLink";
  const URL = `${BASE_URL}${endpoint}`;

  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDkzNzczMjgsImV4cCI6MTcwOTQ2MzMyOCwiaWQiOiJBbC0vMjAyNC8wMDMxIn0.pDNOYHjoArD655UU1Ig6MWJVxD3zJMWAPMfr8klShi2LEoYOy77rlfFOUvtzINpGDgJwDgl-ypd-notNbLQDwQ";
  const headers = {
    // Authorization: `Bearer ${token}`,
    Authorization: "Bearer " + token,
  };

  console.log("URL => " + URL);
  console.log("I dey here");
  console.log("recipient email =>  " + recipientEmail);


  try {
    const response = await axios.post(URL, recipientEmail, { headers });
    console.log("My response ------>>>> ", response);
    return response;
  } catch (error) {
    return error.response;
  }
};
