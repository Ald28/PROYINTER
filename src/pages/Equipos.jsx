import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const Equipos = () => {
    const equiposList = [
        { id: 1, name: 'Tanque de almacenamiento de 0.5m3' },
        { id: 2, name: 'Tanque de preparación de 1.7m3' },
        { id: 3, name: 'Agitador para tanque de preparación de 1.7m3' },
        { id: 4, name: 'Boya para tanque de almacenamiento de 0.5m3' },
    ];

    useEffect(() => {
        // Inicializar DataTables después de que el componente haya montado
        $(document).ready(function() {
            $('#equiposTable').DataTable();
        });
    }, []);

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/ver-base-instalada">Base Instalada</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/servicio">Servicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Equipos</li>
                </ol>
            </nav>
            <h3>Equipos</h3>
            <table id="equiposTable" className="display">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Equipo</th>
                    </tr>
                </thead>
                <tbody>
                    {equiposList.map(equipo => (
                        <tr key={equipo.id}>
                            <td>{equipo.id}</td>
                            <td>
                                <Link to={`/cliente/informacion-tecnica-equipos/equipos/${equipo.id}`}>
                                    {equipo.name}
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
