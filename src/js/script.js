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

// CONFIGURACIÓN DEL MODAL
const modal = document.getElementById("modalProyecto");
const cerrarBtn = document.getElementById("cerrarModal");
const modalTitulo = document.getElementById("modalTitulo");
const modalCuerpo = document.getElementById("modalCuerpo");

// Seleccionamos todos los botones de "Ver detalles"
const botonesDetalles = document.querySelectorAll(".btntoggle");

botonesDetalles.forEach((boton) => {
    boton.addEventListener("click", () => {
        // 1. Buscamos el contenedor del proyecto más cercano
        const proyectoContenedor = boton.closest(".proyecto");
        
        // 2. Extraemos la información
        const titulo = proyectoContenedor.querySelector("h3").textContent;
        const detallesHTML = proyectoContenedor.querySelector(".oculto").innerHTML;

        // 3. Metemos la información dentro del modal
        modalTitulo.textContent = titulo;
        modalCuerpo.innerHTML = detallesHTML;

        // 4. ¡Abrimos el modal! (Función nativa de <dialog>)
        modal.showModal();
    });
});

// Evento para cerrar el modal con la X
cerrarBtn.addEventListener("click", () => {
    modal.close();
});

// Cerrar el modal si el usuario hace clic fuera del papelito (en el fondo difuminado)
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

// MENÚ HAMBURGUESA //
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('activo');
    
    // Opcional: Cambiar el icono de ☰ a ✕
    if (navLinks.classList.contains('activo')) {
        menuToggle.innerHTML = '<span class="barras">✕</span>';
    } else {
        menuToggle.innerHTML = '<span class="barras">☰</span>';
    }
});

// Cerrar el menú automáticamente al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('activo');
        menuToggle.innerHTML = '<span class="barras">☰</span>';
    });
});