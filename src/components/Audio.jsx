import React from "react";
import { audios } from "../services/audios";
import "./App.css"

const Audio = ({ audio, onEnded }) => {
  return (
    <audio
      className="appearance-none w-full p-2"
      controls
      autoPlay
      onEnded={onEnded}
      src={audios[audio]}
    />
  );
};

export default Audio;
