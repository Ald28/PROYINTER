import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

const CertificadoGarantia = () => {
    const certificadoList = [
        { id: 1, name: 'Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf', fecha: '11 jul. 2024', link: '/files/Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        const table = $('#certificadoTable').DataTable({
            paging: false,
            searching: false,
            info: false
        });
    
        return () => {
            if ($.fn.dataTable.isDataTable('#certificadoTable')) {
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
        setPdfLink(''); // Limpia el enlace PDF cuando se cierra el modal
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0 " to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0 " to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0 " to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0 " to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item active text-primary" aria-current="page">Certificado de Garantia</li>
                </ol>
            </nav>
            <h3>Certificado de Garantia</h3>
            <table id="certificadoTable" className="display">
                <thead>
                    <tr>
                        <th>Nombre del Certificado</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {certificadoList.map(certificado => (
                        <tr key={certificado.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        {/* Mostrar el nombre del certificado como texto plano */}
                                        {certificado.name}
                                    </div>
                                </div>
                            </td>
                            <td>{certificado.fecha}</td>
                            <td>
                                <Link className="custom-button fw-normal" onClick={() => handleShowModal(certificado.link)}>
                                    <i className="fas fa-eye"></i> Visualizar                                  
                                </Link>
                                <a className="custom-button mx-3 fw-normal" href={certificado.link} download target="_blank" rel="noopener noreferrer ">
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

export default CertificadoGarantia;
