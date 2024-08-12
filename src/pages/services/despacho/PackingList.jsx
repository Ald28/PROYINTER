import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const PackingList = () => {
    const packingList = [
        { id: 1, nombre: 'MB_DC_PACKING LIST TANK FIB. VIDR._001.pdf', fecha: '09/05/2024', link: '/files/MB_DC_PACKING LIST TANK FIB. VIDR._001.pdf' },
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
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/despacho">Despacho</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Packing List</li>
                </ol>
                <h3>Packing List</h3>
                <table ref={tableRef} id="packingListTable" className="display">
                    <thead>
                        <tr>
                            <th>Número de Packing List</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packingList.map(packing => (
                            <tr key={packing.id}>
                                <td>
                                    <div className="info-section">
                                        <div className="info-item">
                                            {/* Mostrar solo el nombre del documento como texto */}
                                            {packing.nombre}
                                        </div>
                                    </div>
                                </td>
                                <td>{packing.fecha}</td>
                                <td>
                                    <Link className="custom-button" onClick={() => handleShowModal(packing.link)}>
                                        <i className="fas fa-eye" ></i>
                                        Visualizar                                  
                                    </Link>
                                    <a className="custom-button mx-3" href={packing.link} download target="_blank" rel="noopener noreferrer">
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

export default PackingList;