import React, { useState } from "react";
import AppointHero from "./AppointHero";
import AvailableAppoint from "./AvailableAppoint";

const AppointBooking = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  return (
    <div>
      <AppointHero selectDate={selectDate} setSelectDate={setSelectDate} />
      <AvailableAppoint selectDate={selectDate} />
    </div>
  );
};

export default AppointBooking;
