import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    useEffect(() => {
        const table = $('#myTable').DataTable({
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

    const handleBackClick = () => {
        navigate(-1); // Navega hacia atrás en la historia
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn p-0 fw-bold" onClick={() => window.location.href = '/cliente'}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn p-0 fw-bold" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn p-0 fw-bold" to="/cliente/servicio">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Oferta de Venta</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between mb-3">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>

            <h4>Oferta de Venta</h4>
            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>Número de Oferta</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map(offer => (
                        <tr key={offer.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
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
