import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

const CertificadoGarantia = () => {
    const navigate = useNavigate(); // Hook para la navegación

    const certificadoList = [
        { 
            id: 1, 
            name: 'Certificado de garantía - Tanques de fibra de vidrio Bateas 2024.pdf', 
            fecha: '07 may. 2024', 
            link: '/files/Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf' 
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        const table = $('#certificadoTable').DataTable({
            paging: false,
            searching: true,
            info: false,
            language: {
                searchPlaceholder: "Buscar",
                zeroRecords: "No se encontraron resultados",
                search: `
                    <div style="
                        background-color: #009FE3;
                        border-radius: 4px;
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        color: white;
                    ">
                        <i class="fas fa-search" style="justify-content: flex-end;"></i>
                    </div>
                `,
            },
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
        setPdfLink('');
    };

    const handleBackClick = () => {
        navigate(-1); // Navega hacia atrás en la historia
    };

    const formatDate = (fechaTexto) => {
        const months = {
            'ene.': '01',
            'feb.': '02',
            'mar.': '03',
            'abr.': '04',
            'may.': '05',
            'jun.': '06',
            'jul.': '07',
            'ago.': '08',
            'sep.': '09',
            'oct.': '10',
            'nov.': '11',
            'dic.': '12',
        };

        const [day, monthText, year] = fechaTexto.split(' ');
        const month = months[monthText.toLowerCase()];

        return `${day.padStart(2, '0')}/${month}/${year}`;
    };

    return (
        <div className="installed-base">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/servicio">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Certificado de Garantía</li>
                </ol>
            </nav>
            <button className="circle-button-back mb-3" onClick={handleBackClick}>
                <i className="fa fa-arrow-left"></i>
                <span className='text-black'>Atrás</span>
            </button>
            <h3>Certificado de Garantía</h3>

            <table id="certificadoTable" className="display">
                <thead>
                    <tr>
                        <th>Código del Certificado</th>
                        <th style={{ textAlign: 'center' }}>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {certificadoList.map(certificado => (
                        <tr key={certificado.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        {certificado.name}
                                    </div>
                                </div>
                            </td>
                            <td style={{ textAlign: 'center' }}>{formatDate(certificado.fecha)}</td>
                            <td>
                                <Link 
                                    className="custom-button fw-normal" 
                                    onClick={() => handleShowModal(certificado.link)}
                                >
                                    <i className="fas fa-eye"></i> Visualizar
                                </Link>
                                <a 
                                    className="custom-button mx-3 fw-normal" 
                                    href={certificado.link} 
                                    download 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-download"></i> Descargar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
