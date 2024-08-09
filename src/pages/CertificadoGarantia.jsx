import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const CertificadoGarantia = () => {
    const certificadoList = [
        { id: 1, name: 'Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf', fecha: '11 jul. 2024', link: '/files/Certificado de garantia - Tanques de fibra de vidrio Bateas 2024.pdf' },
    ];

    useEffect(() => {
        $(document).ready(function() {
            $('#certificadoTable').DataTable();
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
                    <li className="breadcrumb-item active" aria-current="page">Certificado de Garantia</li>
                </ol>
            </nav>
            <h3>Certificado de Garantia</h3>
            <table id="certificadoTable" className="display">
                <thead>
                    <tr>
                        <th>Nombre del Certificado</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {certificadoList.map(certificado => (
                        <tr key={certificado.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        <a href={certificado.link} download target="_blank" rel="noopener noreferrer">
                                            {certificado.name}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>{certificado.fecha}</td>
                            <td>
                                <a href={certificado.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mr-2">
                                    Previsualizar
                                </a>
                                <a href={certificado.link} download className="btn btn-secondary btn-sm">
                                    Descargar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CertificadoGarantia;
