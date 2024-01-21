import CustomDatePicker from "../molecule/CustomDatePicker";


const handleSelectDate = (date) => {
  console.log("Selected date:", date);
};

const WithdrawalBody = () => {
  return (
    <div>
      <div className="flex flex-shrink-0 justify-between w-full w-5/6">
        <div className="dashboard-header">Withdrawal</div>
        <div>
          <CustomDatePicker onSelectDate={handleSelectDate} />
        </div>
      </div>
    </div>
  );
};

export default WithdrawalBody;
