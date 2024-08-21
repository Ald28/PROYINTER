import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import '../solicoti/TiposCoti.css';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Ingenierias = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate(-1);  // Navega hacia atrás en la historia
      };

    const ingeniList = [
        { id: 1, name: 'Ingenieria', type: 'Ingenieria de Conceptual' },
        { id: 2, name: 'Ingenieria', type: 'Ingenieria de Basica' },
        { id: 3, name: 'Ingenieria', type: 'Ingenieria de Detalle' },
    ];

    useEffect(() => {
        const table = $('#equiposTable').DataTable({
            paging: false,
            searching: false,
            info: false
        });
    
        return () => {
            if ($.fn.dataTable.isDataTable('#equiposTable')) {
                table.destroy();
            }
        };
    }, []);    

    return (
        <div className="servicio">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente/solicitar-cotizacion">Solicitar Cotización</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Ingenierías</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between mb-3">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>
            
            <h3>Ingenierías</h3>
            <table id="equiposTable" className="display">
                <thead>
                    <tr>
                        <th className='text-center'>N°</th>
                        <th className='text-center'>Tipo de Servicio</th>
                        <th className='text-center'>Descripción del Servicio</th>
                        <th className='text-center'>Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {ingeniList.map(ingeni => (
                        <tr key={ingeni.id}>
                            <td className='text-center'>{ingeni.id}</td>
                            <td>
                            {ingeni.name}
                            </td>
                            <td>
                            {ingeni.type}
                            </td>
                            <td>
                                <Link className="custom-button fw-normal" to={``}>
                                    <i className="fas fa-file-lines"></i>
                                    Solicitar Oferta                                
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Ingenierias;