import React from "react";
import "./App.css";
import { colorAlbum } from "../services/colors";

const Album = ({ titulo, año, cancion }) => {
  return (
    <section
      className={`rounded-lg flex flex-col lg:flex-row my-5 justify-between items-center text-center p-1 h-20 w-56 xl:h-16 xl:w-[750px] backdrop-filter backdrop-contrast-[5] backdrop-blur-md bg-gradient-to-t ${colorAlbum(
        titulo
      )} lg:text-xl font-semibold`}
      style={{
        textShadow: "2px 2px 4px rgba(0, 0, 0, 2)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 3), 0px 1px 3px rgba(0, 0, 0, 2)",
      }}
    >
      <h3 className="text-center flex-1">
        <p>
          <span className="font-bold ">Canción: </span>
          {cancion}
        </p>
      </h3>
      <h3 className="text-center flex-1">
        <p>
          <span className="font-bold ">Álbum: </span>
          {titulo}
        </p>
      </h3>
      <h3 className="text-center flex-1">
        <p>
          <span className="font-bold ">Año: </span>
          {año}
        </p>
      </h3>
    </section>
  );
};

export default Album;
