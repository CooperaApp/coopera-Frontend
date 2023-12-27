import DatePicker from "react-datepicker";
import useState from "react";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative border p-2 w-64">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 mr-2 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select Date"
          className="outline-none border-none w-full text-gray-700"
        />
      </div>
    </div>
  );
};

export default CalendarPicker;
