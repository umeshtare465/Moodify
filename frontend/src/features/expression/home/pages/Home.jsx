import React, { useEffect, useRef, useState } from "react";
import { detect, init } from "../../utils";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";

const Home = () => {
  const { handleGetSong } = useSong();
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const animationRef = useRef(null);
  const streamRef = useRef(null);
  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    init({ landmarkerRef, videoRef, streamRef });
    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleDetect = () => {
    detect({
      landmarkerRef,
      setExpression: (exp) => {
        setExpression(exp);
        // Map expression to mood
        let mood = "normal";
        if (exp.includes("Happy")) mood = "happy";
        else if (exp.includes("Sad")) mood = "sad";
        else if (exp.includes("Surprised")) mood = "surprised";
        // Fetch song based on mood
        handleGetSong({ mood });
      },
      videoRef,
    });
  };

  return (
    <div style={{ textAlign: "center", paddingBottom: "100px" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={handleDetect}>Detect Expression</button>
    </div>
  );
};

export default Home;
