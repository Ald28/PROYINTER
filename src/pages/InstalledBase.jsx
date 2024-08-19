import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/styles/InstalledBase.css';
import  '../assets/styles/global-tablas.css';

const InstalledBase = () => {
    const navigate = useNavigate();
    const tableRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('Todos los servicios');

    const handleLinkClick = (path) => {
        navigate(path);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleBackClick = () => {
        navigate(-1);  // Navega hacia atrás en la historia
    };

    const handleNextClick = () => {
        navigate(1);  // Navega hacia adelante en la historia
    };

    const adquiridoList = [
        { id: 1, tipo_servicio: 'Servicio de Procura', descripcion: 'Servicio de Procura de Tanques de Fibra de Vidrio para Cianuro y Sulfatos' },
    ];

    useEffect(() => {
        const table = $(tableRef.current).DataTable({
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

        // Filter table data based on search term and filter
        table.search(searchTerm).draw();

        return () => {
            if ($.fn.dataTable.isDataTable(tableRef.current)) {
                table.destroy();
            }
        };
    }, [searchTerm, filter]);

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn  fw-bold p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Servicios Adquiridos</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between mb-3">
                <button className="circle-button-back" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                    <span className='text-black'>Atrás</span>
                </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 vertical">
                <select value={filter} onChange={handleFilterChange} className="form-select seleccion breadcrumb-item  active fw-bold">
                    <option>Todos los servicios</option>
                    <option>Servicio de Procura</option>  
                    <option>Servicio de Mantenimiento</option>
                    <option>Servicio de Instalación</option>
                </select>

                <div className="search-container">
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-info search-button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <h3>Servicios atendidos o en curso de atención</h3>

            <table ref={tableRef} id="myTable" className="display">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Tipo de Servicio</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {adquiridoList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.tipo_servicio}</td>
                            <td>{item.descripcion}</td>
                            <td className="text-center">
                                <button className="btn btn-link text-decoration-none custom-button fw-normal" onClick={() => handleLinkClick('/cliente/servicio')}>
                                    <i className="fas fa-file-lines"></i>
                                    <br />
                                    Abrir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InstalledBase;
