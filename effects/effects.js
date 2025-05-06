const Nav = document.querySelector(".options");
const body = document.querySelector("Body")
const OptionsLinks = document.querySelector(".options");
const BTNanimacion = document.querySelector("body section footer");
const BTNsDarkandLight = document.getElementById("BTNdark");
const Promesa1 = document.querySelector("cool-slider-info");
const Curriculum = document.getElementById("")
const btnmas = document.querySelector("")

function OtrasImagenes(){
  const MasSKILS = document.querySelector(".Mas-Sobre-Skills").style.display = "block";
  const BTNshowless = document.querySelector(".botonMenosSkilss").style.display = "block";
  };

function MenosImagenes(){
  document.querySelector(".Mas-Sobre-Skills").style.display = "none";
  document.querySelector(".botonMenosSkilss").style.display = "none";
  };

if(scrollY > 250){
  OptionsLinks.remove("options");}
else{
  OptionsLinks.appendChild("boton2oculto")
}

const formulario = document.getElementById('form');
const dialogo = document.getElementById('mensajeDialogo');
const cerrar = document.getElementById('cerrarDialogo');

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); 
  dialogo.showModal(); 

  cerrar.addEventListener('click', function() {
    dialogo.close(); 
  });
   }
)
