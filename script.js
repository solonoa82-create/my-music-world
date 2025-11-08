document.addEventListener("DOMContentLoaded", () => {
  const artistas = document.querySelectorAll(".artista");
  const info = document.getElementById("info-artista");
  const nombre = document.getElementById("nombre-artista");
  const descripcion = document.getElementById("descripcion-artista");
  const link = document.getElementById("link-mas");
  const btnCerrar = document.getElementById("cerrar-info");
  const linkExtra = document.getElementById("link-mas-web"); // si lo tienes en HTML

  const datosArtistas = {
    artemas: {
      nombre: "Artemas",
      descripcion: "Artemas te sumerge en su musica hot combinando pop alternativo con toques melancólicos. Sus letras pegadizas me obsesionaron y el aura que crea con sus synthetizadores es impresionante.",
      linkSpotify: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
      linkWeb: "#" // aquí puedes poner el link a otra sección de tu bloc
    },
    rojuu: {
      nombre: "Rojuu",
      descripcion: "Rojuu un artista emergente super importante y genial de la puesta en escena española. Utiliza diversos generos volviendolos suyos. Una estetica tan personal y genuina.",
      linkSpotify: "https://open.spotify.com/artist/2SmPZPhA0mKXZzAyzvCCs9",
      linkWeb: "#"
    },
    "depresion sonora": {
      nombre: "Depresión Sonora",
      descripcion: "Proyecto post-punk de Marcos Crespo. Letras que rompen, un sonido que consuela a los adolescentes mas deprimidos y una musica inolvidable.",
      linkSpotify: "https://open.spotify.com/artist/0iMgY3Z5u3L0K5f89vHh5e",
      linkWeb: "#"
    },
    wisp: {
      nombre: "Wisp",
      descripcion: "Wisp una artista que te envuelve y no te deha salir, Shoegaze y dreampop etéreo. Una voz cristalina que te devora sin notarlo y su musica que te hace olvidar hasta lo mas inolvidable para fundirte en el abismo.",
      linkSpotify: "https://open.spotify.com/artist/2JzQdL9GMvPJE7T4eV99cU",
      linkWeb: "#"
    }
  };

  artistas.forEach((artista) => {
    artista.addEventListener("click", () => {
      const id = artista.dataset.id;
      const datos = datosArtistas[id];

      if (datos) {
        nombre.textContent = datos.nombre;
        descripcion.textContent = datos.descripcion;

        // link a Spotify
        link.textContent = "Escuchar en Spotify";
        link.href = datos.linkSpotify;
        link.target = "_blank";

        // link interno a otra sección
        if (linkExtra) {
          linkExtra.textContent = "Ver más detalles";
          linkExtra.href = datos.linkWeb;
        }

        info.classList.remove("oculto");
        info.classList.add("mostrar");
      }
    });
  });

  btnCerrar.addEventListener("click", () => {
    info.classList.remove("mostrar");
    info.classList.add("oculto");
  });
});
