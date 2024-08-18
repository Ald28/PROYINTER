import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import '../../../../assets/styles/Equipo.css';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Equipos = () => {
    const navigate = useNavigate();
    
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
            searching: true,
            info: false,
            language: {
                searchPlaceholder: "Buscar...",
                zeroRecords: "No hay resultados",
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
            if ($.fn.dataTable.isDataTable('#equiposTable')) {
                table.destroy();
            }
        };
    }, []);    

    const handleBackClick = () => {
        navigate(-1); // Navega hacia atrás en la historia de navegación del usuario
    };

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/servicio">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn fw-bold p-0" to="/cliente/InformacionTec">Información Técnica de Equipos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Equipos</li>
                </ol>
            </nav>

            <button className="circle-button-back mb-3" onClick={handleBackClick}>
                <i className="fa fa-arrow-left"></i>
                <span className='text-black'>Atrás</span>
            </button>

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
                            <td>{equipo.name}</td>
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
