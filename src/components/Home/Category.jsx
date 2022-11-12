import React from "react";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Category = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4 text-white mx-3">
      {/* ====time=== */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-5 flex justify-center items-center ">
        <img src={clock} className="mr-10" alt="" />
        <div>
          <h3 className="text-2xl font-bold my-2">Opening Hours</h3>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>

      {/* ====location=== */}
      <div className="bg-accent rounded-xl p-5 flex justify-center items-center ">
        <img src={location} className="mr-10" alt="" />
        <div>
          <h3 className="text-2xl font-bold my-2">Visit our location</h3>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>

      {/* ====contact=== */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-5 flex justify-center items-center ">
        <img src={phone} className="mr-10" alt="" />
        <div>
          <h3 className="text-2xl font-bold my-2">Contact us now</h3>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
