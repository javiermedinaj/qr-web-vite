import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';

const Hero = () => {
    const [link, setLink] = useState('');
    const qrCodeRef = useRef(null);

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
        <div className="bg-gray-200 py-20 dark:bg-gray-900 dark:text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-10 text-center">QRGenerator</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-2">
                        <label htmlFor="link" className="block mb-1 text-center text-2xl pb-8">Ingrese el link al que quiere hacer QR:</label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            value={link} 
                            onChange={(e) => setLink(e.target.value)} // 
                            className="border  rounded px-4 py-2 focus:outline-none block w-full dark:bg-gray-800 dark:text-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                    >
                        Generar QR
                    </button>
                    {link && (
                        <button
                            type="button"
                            onClick={() => {handleClear(); setLink('');}} 
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                        >
                            Limpiar
                        </button>
                    )}
                </form>
                {link && (
                    <div className="h-400">
                        <h2 className="text-xl font-bold mb-2 text-center py-5">Código QR generado:</h2>
                        <div className="flex justify-center py-5">
                            <QRCode value={link} size={200} ref={qrCodeRef} />
                        </div>
                        <button
                            onClick={handleDownloadQR}
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
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
