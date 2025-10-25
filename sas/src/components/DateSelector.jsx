import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function DateSelector({ onDateChange }) {
  const [value, setValue] = useState(null);
  let date = `${value?.$y}/${value?.$M + 1}/${value?.$D}`;
  console.log(date);

  const handleChange = (newValue) => {
    setValue(newValue);

    if (newValue && onDateChange) {
      const formatted = newValue.format("YYYY/MM/DD");
      onDateChange(formatted);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value} onChange={handleChange} />
    </LocalizationProvider>
  );
}

export default DateSelector;
