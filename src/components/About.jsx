import React from 'react';

const About = () => {
    return (
        <div className="px-10 py-20 bg-gray-200 dark:bg-black dark:text-white ">
            <h2 className="text-3xl font-bold mb-4 text-center  py-5">Generador de Códigos QR</h2>
            <p className="text-lg">
                Bienvenido al generador de códigos QR. Con esta herramienta, puedes crear códigos QR para
                enlaces, texto, direcciones de correo electrónico, WhatsappLink y más. Simplemente
                ingresa el contenido deseado y el código QR correspondiente se generará automáticamente.
            </p>
            <p className="text-lg">
                Para generar un código QR, ve a la sección de generación de códigos, ingresa el contenido y
                haz clic en el botón "Generar QR". El código QR resultante se mostrará y tendrás la opción
                de descargarlo en formato PNG.
            </p>
            <p className="text-lg">
                ¡Explora todas las posibilidades y utilidades de los códigos QR con esta herramienta fácil
                de usar! Crea códigos QR personalizados para tus sitios web, productos, eventos y más.
            </p>
        </div>
    );
};

export default About;
