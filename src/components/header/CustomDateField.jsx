import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function CustomDateField() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            "& input": {
              padding: "11.5px 14px",
              background: "#fff",
            },
          }}
          renderInput={(params) => <TextField {...params} />}
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth: true,
              label: "Check-In Date",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default CustomDateField;
