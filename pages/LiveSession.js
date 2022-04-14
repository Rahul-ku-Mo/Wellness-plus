import { useEffect } from "react";
import Header from "../components/LayoutWrapper/Header";
import Footer from "../components/LayoutWrapper/Footer";
import MyTable from "../components/MyTable";
const LiveSession = () => {
  useEffect(() => {
    const playVideoFromCamera = async () => {
      try {
        const constraints = { video: true, audio: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector("video#localVideo");
        videoElement.srcObject = stream;
      } catch (error) {
        console.error("Error opening video camera.", error);
      }
    };
    playVideoFromCamera();
  }, []);

  useEffect(() => {
    const openMediaDevices = async (constraints) => {
      return await navigator.mediaDevices.getUserMedia(constraints);
    };

    try {
      const stream = openMediaDevices({ video: true, audio: true });
      console.log("Got MediaStream:", stream);
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  }, []);

  return (
    <div>
      <Header />
      <MyTable />
      <video id="localVideo" autoplay playsinline controls="false" />

      <Footer />
    </div>
  );
};

export default LiveSession;
