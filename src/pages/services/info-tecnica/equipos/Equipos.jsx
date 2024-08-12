import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../../../assets/styles/Equipo.css';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Equipos = () => {
    const equiposList = [
        { id: 1, name: 'Tanque de almacenamiento de 0.5m3 para cianuro' },
        { id: 2, name: 'Tanque de almacenamiento de 0.5m3 para sulfato' },
        { id: 3, name: 'Tanque de preparación de 2m3 para cianuro' },
        { id: 4, name: 'Tanque de preparación de 2m3 para sulfato' },
        { id: 5, name: 'Agitador para tanque de preparación de 2m3' },
        { id: 6, name: 'Boya para tanque de almacenamiento de 0.5m3' },
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
                    <li className="breadcrumb-item active text-primary" aria-current="page">Equipos</li>
                </ol>
            </nav>
            <h3>Equipos</h3>
            <table id="equiposTable" className="display">
                <thead>
                    <tr>
                        <th className='text-center'>ID</th>
                        <th className='text-center'>Nombre del Equipo</th>
                        <th className='text-center'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {equiposList.map(equipo => (
                        <tr key={equipo.id}>
                            <td className='text-center'>{equipo.id}</td>
                            <td>
                            {equipo.name}
                            </td>
                            <td>
                                <Link className="custom-button fw-normal" to={`/cliente/informacion-tecnica-equipos/equipos/${equipo.id}`}>
                                    <i className="fas fa-file-lines"></i>
                                    Abrir                                
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Equipos;
