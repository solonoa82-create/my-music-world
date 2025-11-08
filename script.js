document.addEventListener("DOMContentLoaded", () => {
  const artistas = document.querySelectorAll(".artista");
  const info = document.getElementById("info-artista");
  const nombre = document.getElementById("nombre-artista");
  const descripcion = document.getElementById("descripcion-artista");
  const link = document.getElementById("link-mas");
  const btnCerrar = document.getElementById("cerrar-info");

  const datosArtistas = {
    artemas: {
      nombre: "Artemas",
      descripcion: "Artemas combina pop alternativo con toques melancólicos. Su sonido mezcla guitarras suaves y producción moderna.",
      link: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
    },
    rojuu: {
      nombre: "Rojuu",
      descripcion: "Rojuu es una de las voces más importantes del trap triste y la música emo española. Sus letras exploran emociones profundas.",
      link: "https://open.spotify.com/artist/2SmPZPhA0mKXZzAyzvCCs9"
    },
    "depresion sonora": {
      nombre: "Depresión Sonora",
      descripcion: "Proyecto post-punk de Marcos Crespo. Letras existenciales, guitarras oscuras y una atmósfera nostálgica.",
      link: "https://open.spotify.com/artist/0iMgY3Z5u3L0K5f89vHh5e"
    },
    wisp: {
      nombre: "Wisp",
      descripcion: "Wisp crea un sonido shoegaze y dreampop que te envuelve en una sensación etérea y melancólica.",
      link: "https://open.spotify.com/artist/2JzQdL9GMvPJE7T4eV99cU"
    }
  };

  artistas.forEach((artista) => {
    artista.addEventListener("click", () => {
      const id = artista.dataset.id;
      const datos = datosArtistas[id];

      if (datos) {
        nombre.textContent = datos.nombre;
        descripcion.textContent = datos.descripcion;
        link.href = datos.link;

        info.classList.remove("oculto");
      }
    });
  });

  btnCerrar.addEventListener("click", () => {
    info.classList.add("oculto");
  });
});
