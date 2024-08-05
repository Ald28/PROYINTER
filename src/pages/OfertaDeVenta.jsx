import React from 'react';
import '../assets/styles/OfertaDeVenta.css';

const OfertaDeVenta = () => {
    const offers = [
        {
            id: 1,
            title: 'Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf',
            link: '/files/Cot. 20240020 - Servicio de suministro de tanques en fibra de vidrio_Bateas.pdf'
        }
    ];

    return (
        <div className="offer-page">
            <h2>Oferta de Venta</h2>
            <div className="info-section">
                {offers.map(offer => (
                    <div className="info-item" key={offer.id}>
                        <a href={offer.link} download target="_blank" rel="noopener noreferrer">
                            {offer.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfertaDeVenta;
