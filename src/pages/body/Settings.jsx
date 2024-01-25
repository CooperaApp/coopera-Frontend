import TopNav from "../../utils/reusable-components/TopNav";
import SideBar from "../../utils/reusable-components/SideBar";

const Settings = () => {
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
