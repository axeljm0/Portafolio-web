const formulario = document.getElementById('form');
const dialogo = document.getElementById('mensajeDialogo');
const cerrar = document.getElementById('cerrarDialogo');
const body = document.querySelector('body');

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); 
  dialogo.showModal(); 

  cerrar.addEventListener('click', function() {
    dialogo.close(); 
  });
   }
)

window.addEventListener("scroll", function () {
  const elemento = document.getElementById(".options");
  if (window.scrollY > 150) {
    elemento.classList.add("oculto");
  } else {
    elemento.classList.remove("oculto");
  }
});

