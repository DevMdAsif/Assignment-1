import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";

export const Knowledge = ({info , handeltime}) => {
  const { name, titel, img, profile_img, duration, tag1, tag2 } =info;


  return (
    <div className="w-[845px] h-[821px] border-2 mt-8">
      <img className="w-[845px] h-[450px]" src={img} alt="" />
      <div className=" mt-10 ml-4">
        <div className=" flex justify-between">
          <div className=" flex">
            <img className=" h-14 w-14 rounded-full" src={profile_img} alt="" />
            <div className="pl-5">
              <h3 className=" text-2xl font-bold">{name}</h3>
              <p className="pt-2">Mar 14 (4 Days ago),</p>
            </div>
          </div>
          <p className=" pt-5 pr-2">
            {duration} min read <FontAwesomeIcon icon={faCropSimple} />
          </p>
        </div>
        <p className=" pt-5 text-4xl font-bold pb-3">{titel}</p>
        <p className=" text-xl pt-5">
          #{tag1} <span className=" pl-4">#{tag2}</span>
        </p>
        <p onClick={()=>handeltime(duration)} className=" text-[#6047EC] underline underline-offset-4 font-bold cursor-pointer text-xl pt-5">
          Mark as read
        </p>
      </div>
    </div>
  );
};
