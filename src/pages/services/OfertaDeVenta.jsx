import React, { useEffect } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';

const OfertaDeVenta = () => {
    const offers = [
        {
            id: 1,
            title: 'Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf',
            link: '/files/Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf',
            fecha: '2024-08-01'
        }
    ];

    useEffect(() => {
        $('#myTable').DataTable();
    }, []);

    const handleLinkClick = (path) => {
        window.location.href = path;
    };

    return (
        <div className="offer-page">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-link p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Base Instalada</li>
                    <li className="breadcrumb-item active" aria-current="page">Servicio</li>
                    <li className="breadcrumb-item active" aria-current="page">Oferta de Venta</li>
                </ol>
            </nav>
            <h4>Oferta de Venta</h4>
            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>Oferta</th>
                        <th>Fechas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map(offer => (
                        <tr key={offer.id}>
                            <td>
                                <div className="info-section">
                                    <div className="info-item">
                                        <a href={offer.link} download target="_blank" rel="noopener noreferrer">
                                            {offer.title}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>{offer.fecha}</td>
                            <td>
                                <a href={offer.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mr-2">
                                    Previsualizar
                                </a>
                                <a href={offer.link} download className="btn btn-secondary btn-sm">
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

export default OfertaDeVenta;
