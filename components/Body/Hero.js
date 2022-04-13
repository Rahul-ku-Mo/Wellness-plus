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
  const physicalHealth = [{ name: "Yoga Class" , id: "p5"}, {name: "Aerobic Class" , id: "p6"}, {name: "Workouts" , id:"p7"}];
  return (
    <>
      <div className={styles.mainbg}>
        <Card value={"Mental Wellness"} prg={mentalHealth} />
        <Card value={"Physical Wellness"} prg={physicalHealth} />
      </div>
    </>
  );
};

export default Hero;
