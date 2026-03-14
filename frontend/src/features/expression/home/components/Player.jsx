import React, { useRef, useState, useEffect, useContext } from "react";
import { SongContext } from "../song.context";
import "./player.scss";

const Player = () => {
  const { song } = useContext(SongContext);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 5, duration);
  };

  const skipBackward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 5, 0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSpeedChange = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="player-controls">
        <button onClick={skipBackward}>⏪ -5s</button>
        <button onClick={togglePlayPause}>{isPlaying ? "⏸️" : "▶️"}</button>
        <button onClick={skipForward}>⏩ +5s</button>
      </div>
      <div className="progress-container">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="progress-bar"
        />
        <span>{formatTime(duration)}</span>
      </div>
      <div className="speed-control">
        <label>Speed: </label>
        <select value={playbackRate} onChange={handleSpeedChange}>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
      <div className="song-info">
        <img src={song.posterUrl} alt={song.title} width="50" height="50" />
        <div>
          <h3>{song.title}</h3>
          <p>Mood: {song.mood}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
