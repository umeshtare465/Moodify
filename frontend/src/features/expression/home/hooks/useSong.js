import { useContext, useEffect } from "react";
import { SongContext } from "../song.context";
import { getSongs } from "../service/song.api";

export const useSong = () => {
  const context = useContext(SongContext);
  const { song, setsong, songs, setsongs, loading, setloading } = context;
  async function handleGetSong({ mood }) {
    setloading(true);
    try {
      const data = await getSongs(mood);
      if (data.songs && data.songs.length > 0) {
        setsongs(data.songs);
        setsong(data.songs[0]); // Set first song as current
      } else {
        console.log("No songs found for mood:", mood);
        // Keep the current song or set a default
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
    setloading(false);
  }

  const playSong = (selectedSong) => {
    setsong(selectedSong);
  };

  return { song, songs, loading, handleGetSong, playSong };
};
