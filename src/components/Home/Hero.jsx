import React from "react";
import chair from "../../assets/images/chair.png";
import bg_chair from "../../assets/images/bg.png";
import ButtonPrimary from "../Button/ButtonPrimary";

const Hero = () => {
  return (
    <div className="hero rounded-md">
      <img
        src={bg_chair}
        className="h-[70vh] w-full bg-gradient-to-tr"
        alt=""
      />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" rounded-lg shadow-2xl lg:w-1/2" alt="" />
        <div className="">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPrimary>Get Start</ButtonPrimary>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
