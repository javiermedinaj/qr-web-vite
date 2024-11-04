# QR Generator

Este proyecto es una aplicación web para generar códigos QR. Fue desarrollada utilizando React y Vite, y soporta modo oscuro.

## Características

- **Generación de Códigos QR**: Puedes crear códigos QR para enlaces, texto, direcciones de correo electrónico, y más.
- **Modo Oscuro**: La aplicación soporta modo oscuro, que se adapta automáticamente a la preferencia del sistema del usuario.
- **Descarga de Códigos QR**: Los códigos QR generados pueden ser descargados en formato PNG.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para proyectos de frontend.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y eficiente.
- **React Icons**: Conjunto de iconos para React. Estos son opcionales.
- **QRCode.react**: Componente de React para generar códigos QR.
- **html-to-image**: Biblioteca para convertir HTML a imágenes.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/qr-generator.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd qr-generator
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```
2. Abre el navegador y visita `http://localhost:5173`.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes reutilizables de React.
    - `Navbar.jsx`: Barra de navegación con soporte para modo oscuro.
    - `Hero.jsx`: Sección principal para generar y descargar códigos QR.
    - `Step.jsx`: Lista de pasos para guiar al usuario en el uso de la aplicación.
    - `About.jsx`: Información sobre la aplicación.
    - `Footer.jsx`: Pie de página con información del desarrollador.
  - `App.jsx`: Componente principal de la aplicación.
  - `main.jsx`: Punto de entrada de la aplicación.
- `public/`: Archivos públicos como el `index.html`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.


## Contacto

Desarrollado por Javier Medina. Puedes contactarme en [javier_j_medina@hotmail.com](mailto:javier_j_medina@hotmail.com).
