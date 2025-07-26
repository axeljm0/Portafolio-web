const Proyectos = [
    {
        id: 1,
        title: "MiTienda",
        description: "Una tienda en línea para comprar productos variados.",
        enlace : "https://axeljm0.github.io/ecomerce-project/",
        image: "Assets/ecomerce.png",
    },
    {
        id: 2,
        title: "TaskAssign PRO",
        description: "Asignar tareas y gestionar proyectos de manera eficiente.",
        enlace: "https://axeljm0.github.io/TaskAssign-Pro/",
        image: "Assets/taskassign.png",
    },
    {
        id: 3,
        title: "AXELFLIX",
        description: "Peliculas y series al alcance de tu mano.",
        enlace: "https://axeljm0.github.io/Portafolio/",
        image: "Assets/AXELFLIX.png",
    },
    {
        id: 4,
        title: "Linksy",
        description: "Comparte tus enlaces favoritos con el mundo.",
        enlace: "https://axeljm0.github.io/Linksy/",
        image: "Assets/linksy.png",
    },
    {
        id: 5,
        title: "AXEGA",
        description: "Salud y bienestar al alcance de tu mano.",
        enlace: "https://axeljm0.github.io/AXEGA/",
        image: "Login -copia.png",
    },
    {
        id: 6,
        title: "AXEL BANK",
        description: "Gestiona tus finanzas de manera segura y eficiente.",
        enlace: "https://axeljm0.github.io/AXEL-BANK/",
        image: "Assets/Cuenta.png",
    },
    {
        id: 7,
        title: "Pong GAME",
        description: "Juego de ping pong clásico para disfrutar en línea.",
        enlace: "https://axeljm0.github.io/Pong-Game/",
        image: "Assets/pong.png",
    },
    {
        id: 8,
        title: "Secret number game",
        description: "Juego de adivinar un número secreto.",
        enlace: "https://axeljm0.github.io/Secret-Number-Game/",
        image: "Assets/jsgame.png",
    },
    {
        id: 9,
        title: "Barbershop",
        description: "Barbería en línea para reservar citas y servicios.",
        enlace: "https://axeljm0.github.io/Barbershop/",
        image: "Assets/barberíá.png",
    },
]

function Dialog(index) {
  const proyecto = Proyectos[index];

  const dialog = document.createElement('dialog');
  dialog.classList.add('mensawjeDialogo');

  dialog.innerHTML = `
    <h2>${proyecto.title}</h2>
    <img class="img-dialog" src="${proyecto.image}">
    <p>${proyecto.description}</p>
    <a href="${proyecto.enlace}"class="btn-view">Ver</a>
    <button class="btn-close">Cerrar</button>
  `;

  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector('.btn-close').addEventListener('click', () => {
    dialog.close();
  });
}

console.log(Proyectos)

