import React from "react";

const Reviews = ({ data }) => {
  const { image, username, location, describe } = data;
  return (
    <div className="shadow-xl rounded-xl p-8 text-left">
      <p>{describe}</p>
      <div className="flex mt-9 items-center">
        <img src={image} className="mr-4 w-16" alt="" />
        <div>
          <h4>{username}</h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
