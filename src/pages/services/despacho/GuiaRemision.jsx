import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/GuiaRemision.css';
import { Modal, Button } from 'react-bootstrap';

const GuiaRemision = () => {
    const remisionList = [
        { id: 1, nombre: '20601436036-09-EG07-7.pdf', fecha: '06/05/2024', link: '/files/20601436036-09-EG07-7.pdf' },
        { id: 2, nombre: '20601436036-09-EG07-6.pdf', fecha: '06/05/2024', link: '/files/20601436036-09-EG07-6.pdf' },
    ];

    const tableRef = useRef(null);

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        if (!$.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable({
                paging: false,
                searching: false,
                info: false
            });
        }
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
                        <Link className="btn btn-link p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/despacho">Despacho</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Guía de Remisión</li>
                </ol>
                <h3>Guía de Remisión</h3>
                <table ref={tableRef} id="remisionTable" className="display">
                    <thead>
                        <tr>
                            <th>Nombre del Documento</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {remisionList.map(remision => (
                            <tr key={remision.id}>
                                <td>
                                    <div className="info-section">
                                        <div className="info-item">
                                            {/* Mostrar solo el nombre del documento como texto */}
                                            {remision.nombre}
                                        </div>
                                    </div>
                                </td>
                                <td>{remision.fecha}</td>
                                <td>
                                    <Link className="custom-button" onClick={() => handleShowModal(remision.link)}>
                                        <i className="fas fa-eye" ></i>
                                        Visualizar                                  
                                    </Link>
                                    <a className="custom-button mx-3" href={remision.link} download target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-download"></i> Descargar
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </nav>

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
                    ></iframe>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default GuiaRemision;