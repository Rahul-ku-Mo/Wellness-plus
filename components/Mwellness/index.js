import React from "react";
import Program from "../Program";
import c1 from "../Images/c1.jpg";
import c2 from "../Images/c2.jpg";
import c3 from "../Images/c3.jpg";
import Image from "next/image";
const Mwellness = () => {
  return (
    <>
      <Program
      id={"p1"}
        src={c1}
        about={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        heading={"Group Therapy"}
        link={"See Live Sessions"}
      />{" "}
      <div id="p2" className="flex justify-around mt-[100px] items-center">
        <div>
          <div className="text-4xl py-4 font-bold capitalize">
            Professional Session
          </div>

          <div className="w-[400px] text-justify">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </div>
          <div className="flex">
            <div className="border-2 rounded-[30px] mt-4 mr-4 px-4 py-1 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 transition-all 250ms ease-in-out hover:scale-110">
              Check out Session
            </div>
            <div className="border-2 rounded-[30px] mt-4 mr-4 px-4 py-1">
              Join Session
            </div>
          </div>
        </div>
        <Image src={c2} width={640} height={427} />
      </div>
      <Program
        id={"p3"}
        src={c3}
        about={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        heading={"One Time Counselling"}
        link={"Contact Now"}
      />
    </>
  );
};

export default Mwellness;
