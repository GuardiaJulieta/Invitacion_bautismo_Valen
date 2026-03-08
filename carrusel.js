const fotos = [
"./imagenes/pareja/1.jpeg",
"./imagenes/pareja/2.jpeg",
"./imagenes/pareja/3.jpeg",
"./imagenes/pareja/3a.jpeg",
"./imagenes/pareja/4.jpeg",
"./imagenes/pareja/5.jpeg",
"./imagenes/pareja/6.jpeg",
"./imagenes/pareja/7.jpeg",
"./imagenes/pareja/7a.jpeg",
"./imagenes/pareja/8.jpeg",
"./imagenes/pareja/9.jpeg",
"./imagenes/pareja/9a.jpeg",
"./imagenes/pareja/10.jpeg",
"./imagenes/pareja/11.jpeg",
"./imagenes/pareja/12.jpeg",
"./imagenes/pareja/12a.jpeg",
"./imagenes/pareja/13.jpeg",
"./imagenes/pareja/14.jpeg",
"./imagenes/pareja/15.jpeg",
"./imagenes/pareja/16.jpeg",
"./imagenes/pareja/17.jpeg",
"./imagenes/pareja/18.jpeg",
"./imagenes/pareja/19.jpeg",
"./imagenes/pareja/20.jpeg",
"./imagenes/pareja/21.jpeg",
"./imagenes/pareja/22.jpeg",
"./imagenes/pareja/23.jpeg",
"./imagenes/pareja/24.jpeg",
"./imagenes/pareja/25.jpeg",
"./imagenes/pareja/26.jpeg",
"./imagenes/pareja/27.jpeg",
"./imagenes/pareja/28.jpeg",
"./imagenes/pareja/30.jpeg",
"./imagenes/pareja/31.jpeg",
"./imagenes/pareja/32.jpeg",
"./imagenes/pareja/33.jpeg",
"./imagenes/pareja/34.jpeg",
"./imagenes/pareja/35.jpeg",
];

let indice = 0;

const img = document.getElementById("imagen-carrusel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function mostrarFoto() {
  img.classList.remove("foto-activa");
  img.src = fotos[indice];
  img.classList.add("foto-activa");
}

prevBtn.addEventListener("click", () => {
  indice = (indice - 1 + fotos.length) % fotos.length;
  mostrarFoto();
});

nextBtn.addEventListener("click", () => {
  indice = (indice + 1) % fotos.length;
  mostrarFoto();
});

mostrarFoto();
