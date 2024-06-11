import React from "react";

const Onecard = ({pendingtasks,completetasks}) => {
  return (
    <div class="bg-purple-600 p-4  mb-5 sm:mb-0 h-48 rounded-md border border-gray-300">
      <div className="text-white">
        <h2 className="text-2xl font-bold">{pendingtasks}</h2>
        <p>Tasks not finished</p>
      </div>
      <div className="mt-16">
        <div className="flex justify-between text-white">
          <h3>Complete Task</h3>
          <h3>2/3</h3>
        </div>
        <div className="w-full h-1 rounded-md bg-gray-100 mt-1">
          <div className={`h-1 rounded-md bg-gray-400 text-center`} style={{ width: completetasks }}></div>
        </div>
      </div>
    </div>
  );
};

export default Onecard;
