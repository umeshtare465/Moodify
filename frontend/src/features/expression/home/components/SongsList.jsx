import React from "react";
import { useContext } from "react";
import { SongContext } from "../song.context";
import "./songs-list.scss";
import "./songs-list.scss";

const SongsList = () => {
  const { songs, song: currentSong, playSong } = useContext(SongContext);

  const handleSongClick = (selectedSong) => {
    playSong(selectedSong);
  };

  return (
    <div className="songs-list">
      <h3>Songs for your mood</h3>
      <div className="songs-container">
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <div
              key={index}
              className={`song-item ${currentSong.url === song.url ? "active" : ""}`}
              onClick={() => handleSongClick(song)}
            >
              <img src={song.posterUrl} alt={song.title} />
              <div className="song-info">
                <h4>{song.title}</h4>
                <p>{song.mood}</p>
              </div>
              {currentSong.url === song.url && (
                <div className="playing-indicator">🎵</div>
              )}
            </div>
          ))
        ) : (
          <p className="no-songs">No songs found for this mood</p>
        )}
      </div>
    </div>
  );
};

export default SongsList;
