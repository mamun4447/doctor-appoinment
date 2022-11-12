import React from "react";
import quote from "../../assets/icons/quote.svg";
import image1 from "../../assets/images/people1.png";
import image2 from "../../assets/images/people2.png";
import image3 from "../../assets/images/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const testInfo = [
    {
      id: 1,
      image: image1,
      username: "Winson Herry",
      location: "California",
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      image: image2,
      username: "Winson Herry",
      location: "California",
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      image: image3,
      username: "Winson Herry",
      location: "California",
      describe:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <h4 className="text-xl text-primary">Testimonials</h4>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <img src={quote} className="w-20 md:w-96 lg:w-96" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {testInfo.map((data) => (
          <Reviews key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
