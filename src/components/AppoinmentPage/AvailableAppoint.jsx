import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointOptions from "./AppointOptions";
import ModalAppoint from "./ModalAppoint";
import { useQuery } from "@tanstack/react-query";

const AvailableAppoint = ({ selectDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectDate, "PP");

  const { data: appointOptions = [], refetch } = useQuery({
    queryKey: ["services", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

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
        <ModalAppoint
          selectDate={selectDate}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppoint;
