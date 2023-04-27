export const colorAlbum = (album) => {
  switch (album) {
    case "Amor Amarillo":
      return "from-yellow-800 to-transparent";
    case "Bocanada":
      return "from-blue-900 to-transparent";
    case "Siempre es Hoy":
      return "from-red-900 to-transparent";
    case "Ahí Vamos":
      return "from-slate-900 to-transparent";
    case "Fuerza Natural":
      return "from-green-900 to-transparent";
    default:
      return "transparent";
  }
}

