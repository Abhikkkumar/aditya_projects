import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./calendar.css";

export default function Calendar() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} style={{ width: "100%" }}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        {/* <DemoItem label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs("2022-04-17")} />
        </DemoItem> */}
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
