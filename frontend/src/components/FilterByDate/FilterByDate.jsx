import { useState } from "react";
import "./FilterByDate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterByDate = ({ filterByDate }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    filterByDate(start, end);
  };

  return (
    <div className="filterByDate">
      <DatePicker
        showIcon
        className="date-picker-box"
        closeOnScroll={(e) => e.target === document}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => onChangeDate(dates)}
        isClearable
        selectsRange
        placeholderText="Filter By Date"
      />
    </div>
  );
};

export default FilterByDate;
