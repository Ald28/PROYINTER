import React, { useEffect } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import '../services/IngieneriaDetalle.css';
import $ from 'jquery';
import 'datatables.net-dt';
import eyeIcon from '../services/eye.png'; // Icono del ojo
import downloadIcon from '../services/downloads.png'; // Icono de descargar

const IngieneriaDetalle = () => {
    const orders = [
        {
            id: 1,
            codigo: '20601436036-09-EG07-6',
            descripcion: 'Documento de Ingeniería 1',
            fecha: '2024-08-01',
            link: '/files/20601436036-09-EG07-6.pdf'
        },
        {
            id: 2,
            codigo: '20601436036-09-EG07-7',
            descripcion: 'Documento de Ingeniería 2',
            fecha: '2024-08-01',
            link: '/files/20601436036-09-EG07-7.pdf'
        }
    ];

    useEffect(() => {
        $(document).ready(function () {
            $('#orderTable').DataTable({
                paging: false,
                searching: false,
                info: false,
            });
        });
    }, []);

    return (
        <div className="order-page">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item " aria-current="page">Cliente</li>
                    <li className="breadcrumb-item " aria-current="page">Servicios Adquiridos</li>
                    <li className="breadcrumb-item " aria-current="page">Procura Tanque Fibra</li>
                    <li className="breadcrumb-item activate" aria-current="page">Ingeniería de Detalle</li>
                </ol>
            </nav>
            <h4 className="text-center"><b>Planos y Documentos</b></h4>
            <table id="orderTable" className="display">
                <thead>
                    <tr className="header-row">
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.codigo}</td>
                            <td>{order.descripcion}</td>
                            <td>{order.fecha}</td>
                            <td>
                                <a href={order.link} target="_blank" rel="noopener noreferrer" className="btn btn-link text-dark custom-button">
                                    <img src={eyeIcon} alt="Eye Icon" className="action-icon" />
                                    Ver
                                </a>
                                <a href={order.link} target="_blank" rel="noopener noreferrer" className="btn btn-link text-dark custom-button">
                                    <img src={downloadIcon} alt="Eye Icon" className="action-icon" />
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

export default IngieneriaDetalle;
