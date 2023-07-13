import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const Main = () => {
    const [link, setLink] = useState('');

    const handleGenerateQR = (event) => {
        event.preventDefault();
        // Aquí puedes llamar a tu función para generar el código QR con el link
        console.log(`Generar QR para el link: ${link}`);
    };

    const handleClear = () => {
        setLink('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const link = formData.get('link');
        setLink(link);
    };

    return (
        <div>
            <h1>Bienvenido a mi aplicación</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingrese el link al que quiere hacer QR:
                    <input type="text" name="link" />
                </label>
                <button type="submit">Generar QR</button>
                {link && <button type="button" onClick={handleClear}>Limpiar</button>}
            </form>
            {link && (
                <div>
                    <h2>Código QR generado:</h2>
                    <QRCode value={link} />
                </div>
            )}
        </div>
    );
};

export default Main;
