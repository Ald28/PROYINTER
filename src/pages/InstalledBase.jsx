import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import '../assets/styles/InstalledBase.css';

const InstalledBase = () => {
    const navigate = useNavigate();
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

    const filteredData = [
        { id: 1, serviceType: 'Servicio de Procura', description: 'Fabricación de Tanques' },
        { id: 2, serviceType: 'Servicio de Procura', description: 'Fabricación de Tanques' },
    ].filter(item => {
        return (
            item.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="installed-base">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-black fw-bold p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item activate" aria-current="page">Servicios Adquiridos</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between align-items-center mb-3 vertical">
                <select value={filter} onChange={handleFilterChange} className="form-select seleccion activate fw-bold">
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
                    <button className="btn btn-primary search-button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <h3>Servicios atendidos o en curso de atención</h3>

            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Tipo de Servicio</th>
                        <th>Descripción</th>
                        <th>Acción</th> {/* Nueva columna para Acción */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td onClick={() => handleLinkClick('/cliente/servicio')}>{item.serviceType}</td>
                            <td>{item.description}</td>
                            <td className="text-center">
                                <button className="btn btn-link text-decoration-none custom-button" onClick={() => handleLinkClick('/cliente/servicio')}>
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
