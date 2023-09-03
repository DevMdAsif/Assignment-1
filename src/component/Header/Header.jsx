import React from "react";
import image from "../../assets/images.jpg";

export const Header = () => {

  return (
    <div >
      <div className=" flex justify-between items-center w-full h-14 text-3xl font-bold">
        <h1>Programming</h1>
        <img className=" h-14 w-14 rounded-full" src={image} alt="" />
      </div>
    </div>
  );
};

