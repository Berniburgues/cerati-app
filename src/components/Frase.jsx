import React from "react";
import "./App.css";

const Frase = ({ frase }) => {
  return (
    <p
      className="whitespace-pre-line p-3 text-xl lg:text-[22px] font-semibold text-center mb-3"
      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
    >
      🎶{frase}🎶
    </p>
  );
};

export default Frase;
