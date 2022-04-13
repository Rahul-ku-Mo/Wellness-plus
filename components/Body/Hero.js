import hero from "../Images/hero.jpg";
import Image from "next/image";
import Card from "../Card";
import styles from "./Hero.module.css";
const Hero = () => {
  const mentalHealth = [
    "Group Theraphy",
    "Professional Session",
    "One-Time Counselling",
  ];
  const physicalHealth = ["Yoga Class", "Aerobic Class", "Workouts"];
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
