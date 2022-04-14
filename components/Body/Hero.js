import hero from "../Images/hero.jpg";
import Image from "next/image";
import Card from "../Card";
import styles from "./Hero.module.css";
const Hero = () => {
  const mentalHealth = [
    { name: "Group Theraphy", id: "p1" },
    { name: "Professional Session", id: "p2 " },
    { name: "One-Time Counselling", id: "p3 " },
  ];
  const physicalHealth = [
    { name: "Yoga Class", id: "p5" },
    { name: "Aerobic Class", id: "p6" },
  ];
  return (
    <>
      <div className={styles.mainbg}>
        <div>
          <div className="text-xl font-semibold text-slate-300 tracking-wider"> ARE YOU UNWELL? </div>
          <div className="text-5xl pr-2 text-white tracking-wide font-bold leading-[80px] ">
            We help You to Boost <br />
             Health and Lifestyle
          </div>
          <div className="text-xl text-slate-300 ">Check out the Programs</div>
        </div>
        <Card value={"Mental Wellness"} prg={mentalHealth} />
        <Card value={"Physical Wellness"} prg={physicalHealth} />
      </div>
    </>
  );
};

export default Hero;
