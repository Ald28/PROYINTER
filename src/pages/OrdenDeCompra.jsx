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
                        <a href={order.link} download>Descargar</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdenDeCompra;
