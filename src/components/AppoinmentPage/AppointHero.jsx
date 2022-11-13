import React from "react";
import chair from "../../assets/images/chair.png";
import bg_chair from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointHero = ({ selectDate, setSelectDate }) => {
  return (
    <div className="hero rounded-md">
      <img
        src={bg_chair}
        className="h-[70vh] w-full bg-gradient-to-tr"
        alt=""
      />
      <div className="hero-content flex-col lg:flex-row-reverse w-full lg:gap-20">
        <img src={chair} className=" rounded-lg shadow-2xl lg:w-1/2 " alt="" />
        <div className="shadow-lg text-center  rounded-xl bg-white">
          <DayPicker
            mode="single"
            selected={selectDate}
            onSelect={setSelectDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointHero;
