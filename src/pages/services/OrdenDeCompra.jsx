import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    useEffect(() => {
        const table = $('#orderTable').DataTable({
            paging: false,
            searching: false,
            info: false
        });

        return () => {
            // Destruye la instancia de DataTable cuando el componente se desmonte
            if ($.fn.dataTable.isDataTable('#orderTable')) {
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

    const handleBackClick = () => {
        navigate(-1); // Navega hacia atrás en la historia
    };

    const handleLinkClick = (path) => {
        navigate(path); // Navega hacia la ruta especificada
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente/servicio">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Orden de Compra</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between mb-3">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>
            <h4>Orden de Compra</h4>
            <table id="orderTable" className="display">
                <thead>
                    <tr>
                        <th>Número de Orden</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        {order.title}
                                    </div>
                                </div>
                            </td>
                            <td>{order.fecha}</td>
                            <td className='d-flex justify-content-around' >
                                <Link className="custom-button fw-normal" onClick={() => handleShowModal(order.link)}>
                                    <i className="fas fa-eye"></i> 
                                    <div className='d-flex justify-content-center'>Visualizar
                                    </div>
                                </Link>
                                <a className="custom-button mx-3 fw-normal" href={order.link} download target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-download"></i> 
                                    <div className='d-flex justify-content-center'>Descargar
                                    </div>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para la vista previa del PDF */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                backdrop={false}
                dialogClassName="custom-modal"
                aria-labelledby="example-custom-modal-styling-title"
                style={{ marginTop: '54px', width: '100%', maxWidth: '100%' }}
            >
                <div className="modal-content">
                    <Modal.Header closeButton>
                        <Modal.Title>Vista previa del documento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ padding: 0, marginLeft: -67 }}>
                        <iframe
                            src={pdfLink}
                            width="138%"
                            height="500px"
                            frameBorder="0"
                            title="Vista previa del documento"
                        ></iframe>
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    );
};

export default OrdenDeCompra;
