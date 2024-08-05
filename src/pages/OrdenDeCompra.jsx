import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/InstalledBase.css';

const OrdenDeCompra = () => {
    const orders = [
        {
            id: 1,
            title: 'Orden de Compra 2023312569',
            date: '15.12.2023',
            link: '/files/OC_2023312569_Tanques en fibra de vidrio.pdf'
        },
        {
            id: 2,
            title: 'Orden de Compra 2023312421',
            date: '11.12.2023',
            link: '/files/OC_2023312421_Tanques en fibra de vidrio.pdf'
        }
    ];

    return (
        <div className="installed-base">
            <h2>Orden de Compra</h2>
            <div className="info-section">
                {orders.map(order => (
                    <div className="info-item" key={order.id}>
                        <h3>{order.title}</h3>
                        <p>Fecha: {order.date}</p>
                        <a className="download-button" href={order.link} download>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v7m-3-3l3 3 3-3m0-9H9m12 3v1a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2m4 0h6"/>
                            </svg>
                            Descargar
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdenDeCompra;