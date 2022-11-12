import React from "react";
import Fluide from "../../assets/images/fluoride.png";
import Cavity from "../../assets/images/cavity.png";
import Teeth from "../../assets/images/whitening.png";

const Service = () => {
  const cardInfo = [
    {
      id: 1,
      image: Fluide,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      image: Cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      image: Teeth,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="text-center mt-28 mx-3">
      <h3 className="text-xl text-primary">OUR SERVICE</h3>
      <h1 className="text-4xl">Services Web Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8  my-16">
        {cardInfo.map((data) => (
          <div
            key={data.id}
            className="shadow-xl px-14 py-10 rounded-xl border border-spacing-1 flex flex-col justify-center items-center"
          >
            <img src={data.image} alt="" />
            <h2 className="text-xl font-bold my-5">{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
