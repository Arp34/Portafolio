const noti = document.getElementById("notificacion");

// mostrar después de cargar
window.addEventListener("load", () => {
    noti.classList.add("mostrar");

    // ocultar después de 3 segundos
    setTimeout(() => {
        noti.classList.remove("mostrar");
    }, 3000);
});

// mostrar / mostrar menos más información
const btnMas = document.getElementById("btnMas");
const extra = document.getElementById("extra");

btnMas.addEventListener("click", () => {
    extra.classList.toggle("oculto");

    if (extra.classList.contains("oculto")) {
        btnMas.textContent = "Mostrar más";
    } else {
        btnMas.textContent = "Mostrar menos";
    }
});

// MOSTRAR / OCULTAR
const botones = document.querySelectorAll(".btnToggle");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const detalles = boton.nextElementSibling;
        detalles.classList.toggle("oculto");
    });
});