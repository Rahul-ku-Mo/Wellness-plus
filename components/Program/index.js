import React from "react";
import Image from "next/image";

const Program = ({ src, about, link, heading, id }) => {
  return (
    <div id={id} className="flex justify-around py-[100px] items-center">
      <Image width={640} height={427} src={src} />
      <div>
        <div className="text-4xl py-4 font-bold capitalize">{heading}</div>
        <div className="w-[400px] text-justify">{about}</div>
        <div className="flex">
          <div className="border-2 rounded-[30px] mt-4 mr-4 px-4 py-1 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 transition-all 250ms ease-in-out hover:scale-110">
            {link}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
