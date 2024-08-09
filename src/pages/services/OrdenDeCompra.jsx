import React, { useEffect } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';

const OrdenDeCompra = () => {
    const orders = [
        {
            id: 1,
            title: '20601436036-09-EG07-6.pdf',
            link: '/files/20601436036-09-EG07-6.pdf',
            fecha: '2024-08-01'
        },
        {
            id: 2,
            title: '20601436036-09-EG07-7.pdf',
            link: '/files/20601436036-09-EG07-7.pdf',
            fecha: '2024-08-01'
        }
    ];

    useEffect(() => {
        $('#orderTable').DataTable();
    }, []);

    const handleLinkClick = (path) => {
        window.location.href = path;
    };

    return (
        <div className="order-page">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-link p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Base Instalada</li>
                    <li className="breadcrumb-item active" aria-current="page">Servicio</li>
                    <li className="breadcrumb-item active" aria-current="page">Orden de Compra</li>
                </ol>
            </nav>
            <h4>Orden de Compra</h4>
            <table id="orderTable" className="display">
                <thead>
                    <tr>
                        <th>Orden</th>
                        <th>Fechas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        <a href={order.link} download target="_blank" rel="noopener noreferrer">
                                            {order.title}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>{order.fecha}</td>
                            <td>
                                <a href={order.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mr-2">
                                    Previsualizar
                                </a>
                                <a href={order.link} download className="btn btn-secondary btn-sm">
                                    Descargar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdenDeCompra;
