import { useContext, useEffect } from "react";
import { SongContext } from "../song.context";
import { getSongs } from "../service/song.api";

export const useSong = () => {
  const context = useContext(SongContext);
  const { song, setsong, loading, setloading } = context;
  async function handleGetSong({ mood }) {
    setloading(true);
    try {
      const data = await getSongs(mood);
      if (data.songs) {
        setsong(data.songs);
      } else {
        console.log("No song found for mood:", mood);
        // Keep the current song or set a default
      }
    } catch (error) {
      console.error("Error fetching song:", error);
    }
    setloading(false);
  }
  return { song, loading, handleGetSong };
};
