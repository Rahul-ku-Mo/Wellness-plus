import { useEffect } from "react";

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
      <video id="localVideo" autoplay playsinline controls="false" />
    </div>
  );
};

export default LiveSession;
