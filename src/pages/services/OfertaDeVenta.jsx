import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OfertaDeVenta = () => {
    const offers = [
        {
            id: 1,
            title: 'Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf',
            link: '/files/Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf',
            fecha: '2024-08-01'
        }
    ];

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        const table = $('#myTable').DataTable({
            paging: false,
            searching: false,
            info: false
        });

        return () => {
            if ($.fn.dataTable.isDataTable('#myTable')) {
                table.destroy();
            }
        };
    }, []);

    const handleShowModal = (link) => {
        setPdfLink(link);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setPdfLink('');
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn p-0 fw-bold" onClick={() => window.location.href = '/cliente'}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn p-0 fw-bold" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn p-0 fw-bold" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item active text text-primary" aria-current="page">Oferta de Venta</li>
                </ol>
            </nav>
            <h4>Oferta de Venta</h4>
            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>Oferta</th>
                        <th>Fechas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map(offer => (
                        <tr key={offer.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        {/* Mostrar el título como texto plano */}
                                        {offer.title}
                                    </div>
                                </div>
                            </td>
                            <td>{offer.fecha}</td>
                            <td>
                                <Link className="custom-button fw-normal" onClick={() => handleShowModal(offer.link)}>
                                    <i className="fas fa-eye"></i> Visualizar
                                </Link>
                                <a className="custom-button mx-3 fw-normal" href={offer.link} download target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-download"></i> Descargar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para la vista previa del PDF */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" backdrop={false}>
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

export default OfertaDeVenta;
