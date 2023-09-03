import React from "react";

export const Card = () => {
  return (
    <div>
      <div className=" mt-8 w-[411px] h-[80px] bg-blue-100 rounded-lg border-indigo-800 border-2">
        <p className=" text-blue-700 text-center text-2xl font-bold pt-4">
          Spent time on read : 177 min
        </p>
      </div>
      <div className=" h-screen w-[411px] bg-blue-50 border-2  mt-8">
            <h3 className=" font-bold text-2xl text-center">Bookmarked Blogs : 8</h3>
            <div className="mt-5 w-[351px] h-[98px] ml-8 p-5 border-2 bg-white">
            <p className=" text-center font-semibold">Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
            <div className="mt-5 w-[351px] h-[98px] ml-8 p-5 border-2 bg-white">
            <p className=" text-center font-semibold">Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
      </div>
    </div>
  );
};
