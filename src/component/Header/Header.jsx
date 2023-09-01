import React from "react";
import image from "../../assets/images.jpg";

export const Header = () => {

  return (
    <div className=" mt-10 ml-[10%] mr-[5%]">
      <div className=" flex justify-between items-center w-full h-14 text-3xl font-bold">
        <h1>Knowledge Cafe</h1>
        <img className=" h-14 w-14 rounded-full" src={image} alt="" />
      </div>
    </div>
  );
};

