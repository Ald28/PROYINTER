import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const DossierdeCalidad = () => {
    const dossierList = [
        { id: 1, name: 'MB_QC_PRUEB ACEPT TALLER_001', fecha: '11 jul. 2024', link: '/files/MB_QC_PRUEB ACEPT TALLER_001.pdf' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        const table = $('#dossierTable').DataTable({
            paging: false,
            searching: false,
            info: false
        });
    
        return () => {
            if ($.fn.dataTable.isDataTable('#dossierTable')) {
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
                        <Link className="btn btn-link p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Dossier de Calidad</li>
                </ol>
                <h3>Dossier de Calidad</h3>
                <table id="dossierTable" className="display">
                    <thead>
                        <tr>
                            <th>Dossier</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dossierList.map(dossier => (
                            <tr key={dossier.id}>
                                <td>
                                    <div className="info-section">
                                        <div className="info-item">
                                            <a href={dossier.link} download target="_blank" rel="noopener noreferrer">
                                                {dossier.name}
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>{dossier.fecha}</td>
                                <td>
                                    <Link className="custom-button" onClick={() => handleShowModal(dossier.link)}>
                                        <i className="fas fa-eye" ></i>
                                        Visualizar                                  
                                    </Link>
                                    <a className="custom-button mx-3" href={dossier.link} download target="_blank" rel="noopener noreferrer">
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

export default DossierdeCalidad;
