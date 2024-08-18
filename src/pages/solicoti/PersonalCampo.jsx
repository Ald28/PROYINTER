import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../solicoti/TiposCoti.css';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const PersonalCampo = () => {
    const personList = [
        { id: 1, name: 'Personal de Campo', type: 'Instalación' },
        { id: 2, name: 'Personal de Campo', type: 'Operación' },
        { id: 3, name: 'Personal de Campo', type: 'Proyectos' },
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
                    <li className="breadcrumb-item active" aria-current="page">Personal de Campo</li>
                </ol>
            </nav>
            <h3>Personal de Campo</h3>
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
                    {personList.map(person => (
                        <tr key={person.id}>
                            <td className='text-center'>{person.id}</td>
                            <td>
                            {person.name}
                            </td>
                            <td>
                            {person.type}
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

export default PersonalCampo;