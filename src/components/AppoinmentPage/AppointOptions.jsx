import React from "react";

const AppointOptions = ({ option, setTreatment }) => {
  return (
    <div className="card shadow-xl text-center">
      <div className="card-body text-center">
        <h1 className="text-secondary text-2xl">{option.name}</h1>
        <p>{option.slots.length > 0 ? option.slots[0] : "Try another day"}</p>
        <p>
          {option.slots.length > 1
            ? `${option.slots.length} Spaces available`
            : `${option.slots.length} Space availablee`}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={option.slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointOptions;
