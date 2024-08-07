import React, { useEffect } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import '../assets/styles/OfertaDeVenta.css';

const OfertaDeVenta = () => {
    const offers = [
        {
            id: 1,
            title: 'Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf',
            link: '/files/Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf'
        }
    ];

    useEffect(() => {
        $('#myTable').DataTable();
    }, []);

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
            <div className="info-section">
                {offers.map(offer => (
                    <div className="info-item" key={offer.id}>
                        <a href={offer.link} download target="_blank" rel="noopener noreferrer">
                            {offer.title}
                        </a>
                    </div>
                ))}
            </div>
            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map(offer => (
                        <tr key={offer.id}>
                            <td>{offer.id}</td>
                            <td>{offer.title}</td>
                            <td>
                                <a href={offer.link} download target="_blank" rel="noopener noreferrer">
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
