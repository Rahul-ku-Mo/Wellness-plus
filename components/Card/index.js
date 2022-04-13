import React from "react";

const Card = ({ value, prg }) => {
  return (
    <div className="h-48 w-[200px] bg-white rounded-lg p-2 text-center m-3 transition-all ease-in-out 250ms hover:scale-110  ">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-4">
        {prg.map((pg) => {
          return <div className="text-sm ">{pg}</div>;
        })}
      </div>
    </div>
  );
};

export default Card;
