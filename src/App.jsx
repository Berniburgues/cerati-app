import React, { useEffect, useState } from "react";
import data from "./assets/info.json";
import Album from "./components/Album";
import Frase from "./components/Frase";
import Audio from "./components/Audio";
import { colorAlbum } from "./services/colors";

function App() {
  const [albumSeleccionado, setAlbumSeleccionado] = useState(null);
  const [cancionSeleccionada, setCancionSeleccionada] = useState(null);

  function cambiarCancion() {
    // Seleccionar un álbum al azar diferente al álbum actual
    let albumAleatorio;
    do {
      albumAleatorio =
        data.albumes[Math.floor(Math.random() * data.albumes.length)];
    } while (albumAleatorio === albumSeleccionado);

    // Seleccionar una canción al azar del álbum aleatorio
    const canciones = albumAleatorio.canciones;
    let cancionAleatoria;
    do {
      cancionAleatoria =
        canciones[Math.floor(Math.random() * canciones.length)];
    } while (cancionAleatoria === cancionSeleccionada);

    // Establecer la nueva canción seleccionada
    setCancionSeleccionada(cancionAleatoria);
    setAlbumSeleccionado(albumAleatorio);
  }

  useEffect(() => {
    cambiarCancion();
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: albumSeleccionado?.fondo
          ? `url(${albumSeleccionado.fondo})`
          : "none",
      }}
    >
      <section className="flex flex-col items-center justify-center">
        <h1
          className="lg:text-[100px] text-[70px] font-bold mb-16 text-white"
          style={{
            textShadow:
              "0px 4px 6px rgba(0, 0, 0, 3), 0px 1px 3px rgba(0, 0, 0, 2)",
            WebkitTextStroke: "1px black",
            letterSpacing: "2px",
            lineHeight: "1.2",
          }}
        >
          Cerati cantó:
        </h1>
        {cancionSeleccionada && (
          <article
            className={`rounded-2xl text-center  mb-5 justify-between items-center relative p-3 mx-5 h-72 w-full xl:h-60 xl:w-[425px] backdrop-filter backdrop-blur-[3px] backdrop-contrast-[3] bg-gradient-to-b ${colorAlbum(
              albumSeleccionado.titulo
            )}`}
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 3), 0px 1px 3px rgba(0, 0, 0, 2)",
            }}
          >
            {/* Contenido del artículo */}
            <div className="absolute inset-0 flex flex-col justify-center mb-5">
              <Frase frase={cancionSeleccionada.frase} />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <Audio
                audio={cancionSeleccionada?.audio}
                onEnded={cambiarCancion}
              />
            </div>
          </article>
        )}
        {albumSeleccionado && (
          <div className="flex flex-col justify-center items-center">
            <button onClick={cambiarCancion}>
              <i
                className="bx bx-skip-next-circle text-white text-[60px] transition duration-300 transform hover:scale-110 hover:text-blue-300"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 5)",
                  WebkitTextStroke: "1px black",
                }}
              ></i>
            </button>
            <Album
              titulo={albumSeleccionado.titulo}
              año={albumSeleccionado.año}
              cancion={cancionSeleccionada?.nombre}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
