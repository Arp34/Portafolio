# Portafolio Personal - Axel Ruiz Polo

Página web personal que presenta el perfil profesional, habilidades técnicas y proyectos de Axel Ruiz Polo.

## 📋 Descripción

Este es un portafolio web desarrollado con **HTML5**, **CSS3** y **JavaScript**. El sitio incluye una sección de perfil, habilidades técnicas, proyectos realizados y una galería de mascotas como sección adicional.

## 🛠️ Tecnologías utilizadas

| Tecnología |                            Uso                             |
|------------|------------------------------------------------------------|
| HTML5      | Estructura semántica del sitio                             |
| CSS3       | Estilos, diseño responsivo, variables CSS                  |
| JavaScript | Interactividad (menú hamburguesa, modales, notificaciones) |

## 📁 Estructura del proyecto

```
Arp/
├── index.html              # Página principal del portafolio
├── public/
│   └── img/                # Imágenes del proyecto
│       ├── OK.jpeg         # Foto de perfil
│       ├── Html.png        # Icono HTML
│       ├── Css.png         # Icono CSS
│       ├── python.png      # Icono Python
│       └── gato*.webp/jpg  # Imágenes de mascotas
├── src/
│   ├── css/
│   │   ├── base.css        # Variables, tipografía y estilos base
│   │   ├── layout.css      # Estilos del header y navegación
│   │   ├── components.css  # Botones, formularios, inputs
│   │   ├── pages.css       # Estilos de secciones específicas
│   │   ├── modals.css      # Estilos de ventanas modales
│   │   ├── mascotas.css    # Estilos de la página de mascotas
│   │   └── js.css          # Estilos relacionados con JS
│   ├── js/
│   │   └── script.js       # Funcionalidad interactiva
│   └── views/
│       └── mascotas.html   # Página de galería de mascotas
```

## ✨ Características

- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla (mobile, tablet, desktop)
- **Navegación sticky**: El header permanece fijo al hacer scroll
- **Menú hamburguesa**: Navegación colapsable en dispositivos móviles
- **Ventanas modales**: Información detallada de proyectos
- **Efectos visuales**: Transiciones, sombras y animaciones
- **Tema oscuro**: Diseño con colores oscuros para mejor lectura

## 📱 Secciones del sitio

1. **Perfil**: Foto y descripción personal
2. **Sobre mí**: Información biográfica con opción de expandir
3. **Habilidades técnicas**: Iconos de HTML, CSS y Python
4. **Otras habilidades**: Lista de habilidades administrativas
5. **Proyectos**: Sistema de inventario (Python) y Portafolio web
6. **Contacto**: Formulario de contacto
7. **Mascotas**: Galería de fotos de mascotas (página adicional)

## 🚀 Cómo ver el proyecto

1. Clona el repositorio o descarga los archivos
2. Abre `index.html` en tu navegador web
3. Navega por las diferentes secciones

## 📝 Estilos CSS

El proyecto utiliza **variables CSS** para mantener consistencia:

```css
:root {
    --fondo-oscuro: #0a0a0a;
    --fondo-tarjeta: #111111;
    --color-texto: #ffffff;
    --borde: #222222;
}
```

## 🔧 Personalización

### Colores
Modifica las variables en `src/css/base.css` para cambiar el tema.

### Agregar proyectos
Añade nuevos elementos `<li class="proyecto">` en `index.html` dentro de la sección de proyectos.

### Agregar mascotas
Añade nuevas imágenes en `public/img/` y crea nuevos elementos en `src/views/mascotas.html`.

## 📄 Licencia

Este proyecto es de uso personal y educativo.

---

Desarrollado por Axel Ruiz Polo