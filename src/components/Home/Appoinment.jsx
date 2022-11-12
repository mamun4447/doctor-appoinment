import React from "react";
import bg from "../../assets/images/appointment.png";
import doct from "../../assets/images/doctor.png";
import ButtonPrimary from "../Button/ButtonPrimary";

const Appoinment = () => {
  return (
    <div>
      <div className="hero mt-40">
        <img src={bg} className="h-[55vh] w-full" alt="" />
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doct}
            className="rounded-lg lg:w-1/2 -mt-36 hidden lg:block"
            alt=""
          />
          <div className="text-white">
            <h4 className="text-xl font-bold text-primary">Appoinment</h4>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <ButtonPrimary>Appoinment</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
