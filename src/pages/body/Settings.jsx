import TopNav from "../../utils/reusable-components/TopNav";
import SideBar from "../../utils/reusable-components/SideBar";
// import { GenerateInviteLink } from "../../utils/api/AdminAPICall";
import { BASE_URL } from "../../utils/api/API_BASE_URL";
import axios from "axios";
import { useState } from "react";

const Settings = () => {


  const [recipientEmails, setRecipientEmails] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("recipient emails <<<<<<>>>>>> ", recipientEmails);
    const endpoint = "/admin/generateLink";
    const URL = `${BASE_URL}${endpoint}`;

    const token =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDkzNzczMjgsImV4cCI6MTcwOTQ2MzMyOCwiaWQiOiJBbC0vMjAyNC8wMDMxIn0.pDNOYHjoArD655UU1Ig6MWJVxD3zJMWAPMfr8klShi2LEoYOy77rlfFOUvtzINpGDgJwDgl-ypd-notNbLQDwQ";
    const headers = {Authorization: "Bearer " + token};

    console.log("URL => " + URL);
    console.log("I dey here");

    try {
      const response = await axios.post(URL, recipientEmails, { headers });
      console.log("My response ------>>>> ", response);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  return (
    <div
      className="flex flex-row bg-white-100 overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <h1 className="text-xl text-bold font-bold ml-4 mt-5 mb-4">Settings</h1>
        <div>
          <div className=" bg-[#FFFFFF]  rounded-lg mx-4 w-[600px]">
            <h1 className="ml-3 font-bold mb-3">Cooperative Info</h1>

            <div className="flex mb-4">
              <div>
                {" "}
                <div className="flex flex-col items-start ml-3">
                  <label className="text-sm mb-2" htmlFor="email">
                    Cooperative Name
                  </label>
                  <input
                    className="bg-[#F3F3F3] p-2 w-[250px] text-sm pl-3 rounded-sm border mb-4"
                    type="text"
                    id="email"
                    placeholder="Lenko Investment "
                  />
                </div>
                <div className="flex flex-col items-start ml-3">
                  <label className="text-sm mb-2" htmlFor="email">
                    Cooperative Name
                  </label>
                  <input
                    className="bg-[#F3F3F3] p-2 w-[250px] text-sm pl-3 rounded-sm border "
                    type="text"
                    id="email"
                    placeholder="Lenko Investment "
                  />
                </div>
              </div>
              <div>
                {" "}
                <div className="flex flex-col items-start ml-3">
                  <label className="text-sm mb-2" htmlFor="email">
                    Cooperative Name
                  </label>
                  <input
                    className="bg-[#F3F3F3] p-2 w-[250px] text-sm pl-3 rounded-sm border mb-4"
                    type="text"
                    id="email"
                    placeholder="Lenko Investment "
                  />
                </div>
                <div className="flex flex-col items-start ml-3">
                  <label className="text-sm mb-2" htmlFor="email">
                    Cooperative Name
                  </label>
                  <input
                    className="bg-[#F3F3F3] p-2 w-[250px] text-sm pl-3 rounded-sm border"
                    type="text"
                    id="email"
                    placeholder="Lenko Investment "
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start ml-3">
              <label htmlFor="address" className="mb-1">
                Cooperative Address
              </label>
              <textarea
                className="bg-[#F3F3F3] p-1 w-[511px] h-24 resize-none rounded-sm placeholder-gray-500"
                id="address"
                placeholder="No 1 Elediye, Onipanu Lagos"
              ></textarea>
            </div>
          </div>
          <br />
          <br />

          <div className="border ml-5">
            {" "}
            <p>Quick Generate Invite Link Design for Test (To be Deleted)</p>
          </div>
          <form onSubmit={handleSubmit} className="m-5 flex flex-col">
            <textarea
              placeholder="Invite member"
              className="border w-full bg-[#F3F3F3]"
              style={{ height: "100px" }}
              name="recipientEmails"
              value={recipientEmails.join(",")}
              onChange={(event) =>
                setRecipientEmails(event.target.value.split(","))
              }
            />

            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Invite Member
            </button>
          </form>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Settings;
