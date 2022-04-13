import Head from "next/head";
import Image from "next/image";
import Header from "../components/LayoutWrapper/Header";
import Footer from "../components/LayoutWrapper/Footer";
import Hero from "../components/Body/Hero";
import Mwellness from "../components/Mwellness"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Mwellness/>
    </>
  );
}
