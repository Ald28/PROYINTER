import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-dt';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/IngieneriaDetalle.css';

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

    const [showModal, setShowModal] = useState(false);
    const [pdfLink, setPdfLink] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const table = $('#orderTable').DataTable({
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
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente/servicios-adquiridos">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente/procura-tanque-fibra">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Ingeniería de Detalle</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between mb-3">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>

            <h4 className="text-center">Planos y Documentos</h4>
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
                                <button className="custom-button color" onClick={() => handleShowModal(order.link)}>
                                    <i className="fas fa-eye"></i> Visualizar
                                </button>
                                <a className="custom-button color mx-3" href={order.link} download target="_blank" rel="noopener noreferrer">
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

export default IngieneriaDetalle;
