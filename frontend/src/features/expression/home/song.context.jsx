import { createContext } from "react";
import { useState } from "react";
export const SongContext = createContext();
export const SongContextProvider = ({ children }) => {
  const [song, setsong] = useState({
    url: "https://ik.imagekit.io/ob6xwyhiu/cohort2/moodify/Calamity_19w6JoID6.mp3",
    posterUrl:
      "https://ik.imagekit.io/ob6xwyhiu/cohort2/moodify/posters/Calamity_cover_DLpesWHv3.jpg",
    title: "Calamity",
    mood: "happy",
  });
  const [loading, setloading] = useState("false");
  return (
    <SongContext.Provider value={{ song, setsong, loading, setloading }}>
      {children}
    </SongContext.Provider>
  );
};
