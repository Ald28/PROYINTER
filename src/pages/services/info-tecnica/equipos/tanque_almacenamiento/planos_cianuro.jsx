import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../../assets/styles/Servicio.css';

const planos_cianuro = () => {
  const datasheetList = [
    {
      id: 1,
      title: 'MB_MEC_ARREG TANK 0.5M3 CIAN_001',
      link: '/files/MB_MEC_ARREG TANK 0.5M3 CIAN_001.pdf',
      fecha: '22-02-2024'
    },
    {
      id: 2,
      title: 'MB_MEC_ARREG TANK 0.5M3 CIAN_002',
      link: '/files/MB_MEC_ARREG TANK 0.5M3 CIAN_002.pdf',
      fecha: '22-02-2024'
    }
  ];
  
  const [showModal, setShowModal] = useState(false);
  const [pdfLink, setPdfLink] = useState('');

  useEffect(() => {
    const table = $('#datasheet').DataTable({
      paging: false, // Desactiva la paginación
      searching: false, // Desactiva la búsqueda
      info: false // Desactiva la información
    });

    return () => {
      // Destruye la instancia de DataTable cuando el componente se desmonte
      if ($.fn.dataTable.isDataTable('#datasheet')) {
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
            <Link className="btn fw-bold p-0" to="/cliente">Cliente</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="btn fw-bold p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="btn fw-bold p-0" to="/cliente/servicio">Servicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="btn fw-bold p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="btn fw-bold p-0" to="/cliente/informacion-tecnica-equipos/equipos">Equipos</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="btn fw-bold p-0" to="/cliente/informacion-tecnica-equipos/equipos/1">Tanque de Cianuro</Link>
          </li>
          <li className="breadcrumb-item active text-primary">
            Planos
          </li>
        </ol>
      </nav>
      
      <h4>Planos</h4>
      
      <table id="datasheet" className="display">
        <thead>
          <tr>
            <th>Código del Plano</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datasheetList.map(datasheet => (
            <tr key={datasheet.id}>
              <td>
                <div className="info-section">
                  <div className="info-item">
                    <a
                      rel="noopener noreferrer"
                    >
                      {datasheet.title}
                    </a>
                  </div>
                </div>
              </td>
              <td>{datasheet.fecha}</td>
              <td>
                <Link
                  className="custom-button"
                  onClick={() => handleShowModal(datasheet.link)}
                >
                  <i className="fas fa-eye"></i>
                  Visualizar
                </Link>
                <a
                  className="custom-button mx-3"
                  href={datasheet.link}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download"></i>
                  Descargar
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

export default planos_cianuro;
