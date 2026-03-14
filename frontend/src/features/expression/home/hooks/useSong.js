import { getSong } from "../../../../../../backend/src/controllers/song.controllers";

import { useContext, useEffect } from "react";
import { SongContext } from "../song.context";

export const useSong = ({ children }) => {
  const context = useContext(SongContext);
  const { song, setsong, loading, setloading } = context;
  async function handleGetSong({ mood }) {
    setloading(true);
    const data = await getSong(mood);
    setsong(data);
    setloading(false);
  }
  return { song, loading, handleGetSong };
};
