const Nav = document.querySelector(".options");
const body = document.querySelector("Body")
const OptionsLinks = document.querySelector(".options");
const BTNanimacion = document.querySelector("body section footer");
const BTNsDarkandLight = document.getElementById("BTNdark");
const Promesa1 = document.querySelector("cool-slider-info");
const Curriculum = document.getElementById("")
const btnmas = document.querySelector("")

// color del bar 
// window.addEventListener("scroll", function(){
//   Nav.classList.toggle("black", window.scrollY>1050);
// });
// window.addEventListener("scroll", function(){
//  OptionsLinks.classList.toggle("withe-letter-options", window.scrollY>1050)
// });
// botones mostrar mas o menos habilidades

function OtrasImagenes(){
  const MasSKILS = document.querySelector(".Mas-Sobre-Skills").style.display = "block";
  const BTNshowless = document.querySelector(".botonMenosSkilss").style.display = "block";
  };

function MenosImagenes(){
  document.querySelector(".Mas-Sobre-Skills").style.display = "none";
  document.querySelector(".botonMenosSkilss").style.display = "none";
  };

window.addEventListener("scroll", function(){
  OptionsLinks.classList.toggle("boton2oculto", scrollY>300);
})

