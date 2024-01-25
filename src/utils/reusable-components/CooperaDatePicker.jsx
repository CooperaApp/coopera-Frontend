import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const CooperaDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
      customInput={<CustomInput />}
    />
  );
};

const CustomInput = ({ value, onClick }) => (
  <>
    <input
      type="text"
      value={value}
      onClick={onClick}
      placeholder="Select a date"
      className=" border border-gray-300  mt-2 px-1 h-7 rounded-md text-sm text-end w-[110px] "
    />
    <FaCalendarAlt className="absolute left-1 top-4 text-gray-500" />
  </>
);

export default CooperaDatePicker;
