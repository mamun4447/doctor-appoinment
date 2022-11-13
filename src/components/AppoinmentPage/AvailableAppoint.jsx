import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointOptions from "./AppointOptions";
import ModalAppoint from "./ModalAppoint";

const AvailableAppoint = ({ selectDate }) => {
  const [appointOptions, setAppointOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appoinmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointOptions(data));
  }, []);
  return (
    <div>
      <h4 className="text-center my-10 text-secondary font-bold text-xl">
        Available Appointments on {format(selectDate, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
        {appointOptions.map((option) => (
          <AppointOptions
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <ModalAppoint selectDate={selectDate} treatment={treatment} />
      )}
    </div>
  );
};

export default AvailableAppoint;
