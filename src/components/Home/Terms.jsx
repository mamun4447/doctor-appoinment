import React from "react";
import care from "../../assets/images/treatment.png";
import ButtonPrimary from "../Button/ButtonPrimary";

const Terms = () => {
  return (
    <div>
      <div className="hero mt-36">
        <div className="hero-content flex-col lg:flex-row justify-center items-center">
          <img src={care} className="max-w-sm rounded-lg shadow-2xl " alt="" />
          <div className="lg:w-1/2 lg:ml-24">
            <h1 className="text-5xl font-bold ">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <ButtonPrimary>Get Service</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
