import Program from "../Program";
import y1 from "../Images/y1.jpg";
import y2 from "../Images/y2.jpg";
import styles from "./Pwellness.module.css";
import Image from "next/image";
const Pwellness = () => {
  return (
    <div className={styles.pwellness}>
      <Program
        id={"p5"}
        src={y1}
        about={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        heading={"Yoga"}
        link={"See Live Sessions"}
      />{" "}
      <div id="p6" className="flex justify-around mt-[100px] items-center">
        <div>
          <div className="text-4xl py-4 font-bold capitalize">Aerobics</div>

          <div className="w-[400px] text-justify">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </div>
          <div className="flex mb-[100px]">
            <div className="border-2 rounded-[30px] mt-4 mr-4 px-4 py-1 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 transition-all 250ms ease-in-out hover:scale-110">
              Check out Session
            </div>
            <div className="border-2 rounded-[30px] mt-4 mr-4 px-4 py-1">
              Join Session
            </div>
          </div>
        </div>
        <Image src={y2} width={640} height={427} />
      </div>
    </div>
  );
};

export default Pwellness;
