import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        $('#orderTable').DataTable({
            paging: false, // Desactiva la paginación
            searching: false, // Desactiva la búsqueda
            info: false // Desactiva la información
        });
    }, []);

    const handleShowModal = (link) => {
        setPdfLink(link);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setPdfLink(''); // Limpia el enlace PDF cuando se cierra el modal
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
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
                                <Link className="custom-button" onClick={() => handleShowModal(order.link)}>
                                    <i className="fas fa-eye"></i> Visualizar
                                </Link>
                                <a className="custom-button mx-3" href={order.link} download target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-download"></i> Descargar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para la vista previa del PDF */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Vista previa del documento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src={pdfLink}
                        width="100%"
                        height="500px"
                        frameBorder="0"
                        title="Vista previa del documento"
                    ></iframe>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default OrdenDeCompra;
