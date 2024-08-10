// src/pages/services/info-tecnica/equipos/TanqueAlmacenamiento.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const TanquePreparacion = () => {
    const certificadoList = [
        { id: 1, name: 'Tanque de 2m3 para cianuro' },
        { id: 2, name: 'Tanque de 2m3 para sulfatos' }
    ];

    useEffect(() => {
        const table = $('#tanquePreparacion').DataTable({
            paging: false,
            searching: false,
            info: false
        });
    
        return () => {
            if ($.fn.dataTable.isDataTable('#tanquePreparacion')) {
                table.destroy();
            }
        };
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
                    <li className="breadcrumb-item">
                        <Link className="btn btn-link p-0" to="/cliente/informacion-tecnica-equipos/equipos">Equipos</Link>
                    </li>
                    <li className="breadcrumb-item">
                        Tanque de 2m3
                    </li>
                   
                </ol>
            </nav>
            <h3>Tanque de Preparacion de 2m3</h3>
            <table id="tanquePreparacion" className="display">
                <thead >
                    <tr>
                        <th  className='text-center'>Nro</th>
                        <th  className='text-center'>Descripción del Equipo</th>
                        <th  className='text-center'>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {certificadoList.map(certificado => (
                        <tr key={certificado.id}>
                          <td className='text-center'>{certificado.id}</td>
                            <td>
                                <p>
                                  {certificado.name}
                                </p>
                            </td>
                            <td>
                                <Link className="custom-button" to={`/cliente/informacion-tecnica-equipos/equipos/2/${certificado.id}`}>
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

export default TanquePreparacion;
