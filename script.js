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
      descripcion: "Artemas te sumerge en su musica, combinando pop alternativo con toques melancólicos. Sus letras pegadizas obsesionan y el aura que crea con sus synthetizadores es impresionante.",
      linkSpotify: "https://open.spotify.com/artist/0PCCGZ0wGLizHt2KZ7hhA2",
      linkWeb: "#" // aquí puedes poner el link a otra sección de tu bloc
    },
    rojuu: {
      nombre: "Rojuu",
      descripcion: "Rojuu un artista emergente super importante de la puesta en escena española mas indie. Utiliza diversos generos volviendolos suyos. Una estetica muy personal y genuina.",
      linkSpotify: "https://open.spotify.com/artist/04mTej6RpWzBxGwhfThfIi",
      linkWeb: "#"
    },
    "depresion sonora": {
      nombre: "Depresión Sonora",
      descripcion: "Proyecto post-punk de Marcos Crespo. Letras que rompen, un sonido que consuela a los mas deprimidos y una musica inolvidable.",
      linkSpotify: "https://open.spotify.com/artist/2oCrGFAUJwBVFaaIM8c0AO",
      linkWeb: "#"
    },
    wisp: {
      nombre: "Wisp",
      descripcion: "Wisp una artista que te envuelve y no te deha salir, Shoegaze y dreampop etéreo. Una voz cristalina que te devora sin notarlo y su musica que te hace olvidar hasta lo mas inolvidable para fundirte en el abismo.",
      linkSpotify: "https://open.spotify.com/artist/3TJZG17pjOKXwx1ELKJPfm",
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




