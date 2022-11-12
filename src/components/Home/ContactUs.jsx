import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import bg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="py-16"
    >
      <div className="text-center my-16">
        <h4 className="text-lg text-primary font-bold mx-2">Contact Us</h4>
        <h2 className="text-4xl text-white">Stay Connected with Us</h2>
        <form className="flex flex-col justify-center items-center my-5">
          <input
            type="text"
            className="input input-bordered w-full max-w-lg mb-2"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="input input-bordered w-full max-w-lg mb-2"
            placeholder="subject"
          />
          <textarea
            className="textarea textarea-bordered w-full h-32 max-w-lg mb-3"
            placeholder="Your text..."
          ></textarea>
          <ButtonPrimary>Submit</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
