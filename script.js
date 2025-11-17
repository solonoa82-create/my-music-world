document.addEventListener("DOMContentLoaded", () => {
  const artistas = document.querySelectorAll(".artista");
  const info = document.getElementById("info-artista");
  const nombre = document.getElementById("nombre-artista");
  const descripcion = document.getElementById("descripcion-artista");
  const link = document.getElementById("link-mas");
  const btnCerrar = document.getElementById("cerrar-info");
  const linkExtra = document.getElementById("link-mas-web");

  const datosArtistas = {
    artemas: {
      nombre: "Artemas",
      descripcion: "Artemas te sumerge en su música, combinando pop alternativo con toques melancólicos. Sus letras pegadizas obsesionan y el aura que crea con sus sintetizadores es impresionante.",
      linkSpotify: "https://open.spotify.com/artist/0PCCGZ0wGLizHt2KZ7hhA2",
      linkWeb: "https://es.wikipedia.org/wiki/Artemas"
    },
    rojuu: {
      nombre: "Rojuu",
      descripcion: "Rojuu un artista emergente super importante de la puesta en escena española más indie. Utiliza diversos géneros volviéndolos suyos. Una estética muy personal y genuina.",
      linkSpotify: "https://open.spotify.com/artist/04mTej6RpWzBxGwhfThfIi",
      linkWeb: "https://ca.wikipedia.org/wiki/Rojuu"
    },
    "depresion sonora": {
      nombre: "Depresión Sonora",
      descripcion: "Proyecto post-punk de Marcos Crespo. Letras que rompen, un sonido que consuela a los más deprimidos y una música inolvidable.",
      linkSpotify: "https://open.spotify.com/artist/2oCrGFAUJwBVFaaIM8c0AO",
      linkWeb: "https://sonidomuchacho.com/artistas/depresion-sonora/"
    },
    wisp: {
      nombre: "Wisp",
      descripcion: "Wisp es una artista que te envuelve y no te deja salir, Shoegaze y dreampop etéreo. Una voz cristalina que te devora sin notarlo y su música que te hace olvidar hasta lo más inolvidable.",
      linkSpotify: "https://open.spotify.com/artist/3TJZG17pjOKXwx1ELKJPfm",
      linkWeb: "https://en.wikipedia.org/wiki/Wisp_(musician)"
    }
  };

  artistas.forEach(artista => {
    artista.addEventListener("click", () => {
      const id = artista.dataset.id;
      const datos = datosArtistas[id];

      if (datos) {
        nombre.textContent = datos.nombre;
        descripcion.textContent = datos.descripcion;

        link.textContent = "Escuchar en Spotify";
        link.href = datos.linkSpotify;
        link.target = "_blank";

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

