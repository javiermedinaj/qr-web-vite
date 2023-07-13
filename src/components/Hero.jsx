import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';

const Hero = () => {
    const [link, setLink] = useState('');
    const qrCodeRef = useRef(null);

    const handleGenerateQR = (event) => {
        event.preventDefault();
        // Aquí puedes llamar a tu función para generar el código QR con el link
        console.log(`Generar QR para el link: ${link}`);
    };

    const handleClear = () => {
        setLink('');
    };

    const handleDownloadQR = () => {
        const qrCodeNode = qrCodeRef.current;
        htmlToImage.toPng(qrCodeNode)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'qr-code.png';
                link.click();
            })
            .catch((error) => {
                console.error('Error al generar la imagen del código QR', error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const link = formData.get('link');
        setLink(link);
    };

    return (
        <div className="bg-gray-200 py-32">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-10 text-center">QRGenerator</h1>
                <form onSubmit={handleSubmit} className="flex items-center mb-4">
                    <label className="mr-2">
                        Ingrese el link al que quiere hacer QR:
                        <input
                            type="text"
                            name="link"
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Generar QR
                    </button>
                    {link && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Limpiar
                        </button>
                    )}
                </form>
                {link && (
                    <div className="h-400">
                        <h2 className="text-xl font-bold mb-2">Código QR generado:</h2>
                        <div className="flex justify-center">
                            <QRCode value={link} size={200} ref={qrCodeRef} />
                        </div>
                        <button
                            onClick={handleDownloadQR}
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 align-center"
                        >
                            Descargar QR
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
