import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included

export default function Garantias() {

    const [showWarning, setShowWarning] = useState(false); // State for modal
    

    const orders = [
        {
            id: 1,
            title: 'Fabricacion de Tanques de Fibre',
            fecha: '2025-11-07'
        },
        {
            id: 2,
            title: 'Suministro de bomba dosificadora',
            fecha: '2024-06-29'
        }
    ];

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

    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
    };

    const handleBackClick = () => {
      navigate(-1);  // Navega hacia atrás en la historia
      };

    const handleRequestGuarantee = (id) => {
        if (id === 2) {
            setShowWarning(true); // Show warning modal for ID 2
        }
    };

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-black fw-bold p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item">
                        <button className="btn btn-black fw-bold p-0" onClick={() => handleLinkClick('/cliente/garantias-reclamos')}>Garantias y Reclamos</button>
                    </li>
                    <li className="breadcrumb-item activate" aria-current="page">Garantias</li>
                </ol>
            </nav>

              {/* botón de atrás  */}
              <div className="d-flex justify-content-between mb-3">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>

            <h4>Servicios de procura adquiridos</h4>
            <table id="orderTable" className="display">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Servicio de Procura</th>
                        <th>Vigencia de Garantía</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        {order.id}
                                    </div>
                                </div>
                            </td>
                            <td>{order.title}</td>
                            <td>{order.fecha}</td>
                            <td>
                                <Link className="custom-button fw-normal" onClick={() => handleRequestGuarantee(order.id)} to="#">
                                    <i className="fas fa-file-alt"></i>Solicitar Garantía
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                className={`modal fade ${showWarning ? 'show d-block' : ''}`} tabIndex="-1"
                style={showWarning ? { display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' } : { display: 'none' }} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Servicio sin Garantia Vigente</h5>
                            <button type="button" className="btn-close" onClick={() => setShowWarning(false)} aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p>Su servicio de Procura de Suministro de Bomba Dosificadora no cuenta con garantía vigente. Para obtener más información o solicitar una oferta de repuestos o reposición del equipo, haga clic en el siguiente botón.</p>
                        </div>
                        <div className="modal-footer">
                            <div className="d-flex justify-content-end w-100">
                                <button type="button" className="btn btn-danger me-2" onClick={() => setShowWarning(false)}>
                                    Cerrar
                                </button>
                                <button type="button" className="btn btn-success" >
                                    Solicitar Oferta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
