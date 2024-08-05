import React from 'react';
import { useParams } from 'react-router-dom';

const equipoData = {
    1: {
        name: "Tanque de almacenamiento de 0.5m³",
        description: "Detalles sobre el tanque de almacenamiento de 0.5m³.",
        specifications: "Especificaciones técnicas para el tanque de almacenamiento de 0.5m³.",
    },
    2: {
        name: "Tanque de preparación de 1.7m³",
        description: "Detalles sobre el tanque de preparación de 1.7m³.",
        specifications: "Especificaciones técnicas para el tanque de preparación de 1.7m³.",
    },
    3: {
        name: "Agitador para tanque de preparación de 1.7m³",
        description: "Detalles sobre el agitador para tanque de preparación de 1.7m³.",
        specifications: "Especificaciones técnicas para el agitador para tanque de preparación de 1.7m³.",
    },
    4: {
        name: "Boya para tanque de almacenamiento de 0.5m³",
        description: "Detalles sobre la boya para tanque de almacenamiento de 0.5m³.",
        specifications: "Especificaciones técnicas para la boya para tanque de almacenamiento de 0.5m³.",
    },
};

const EquipoDetalles = () => {
    const { id } = useParams();
    const equipo = equipoData[id];

    return (
        <div className="equipo-detalles">
            <h2>{equipo.name}</h2>
            <p>{equipo.description}</p>
            <h3>Especificaciones</h3>
            <p>{equipo.specifications}</p>
        </div>
    );
};

export default EquipoDetalles;
