import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/CertificadoGarantia.css';

const CertificadoGarantia = () => {
    return (
        <div className="certificado-page">
            <h2>Certificado de Garantía - Tanques de Fibra de Vidrio Bateas 2024</h2>
            <div className="certificado-content">
                <p>
                    Señores:
                    <br />
                    Minera Bateas
                    <br />
                    Proyecto:
                    <br />
                    “Tanques en fibra de vidrio”
                </p>
                <p>
                    PROYECTOS E INGENIERÍA INTERNACIONALES E.I.R.L, garantiza que los tanques en fibra de vidrio para su proyecto han sido fabricados de acuerdo a las normas establecidas por nuestra empresa. En ese sentido, se aplica todo lo descrito en este documento para los productos:
                </p>
                <ul>
                    <li>03 tanques de PRFV 0.5m³</li>
                    <li>03 tanques de PRFV 2.0m³</li>
                </ul>
                <p>
                    Estos productos se fabricaron bajo estrictos controles de calidad para su funcionamiento considerando las adecuadas condiciones establecidas en el dossier de calidad, de esta forma garantizamos nuestros productos por 1 año luego de la puesta en marcha o 18 meses luego de la entrega lo que aplique primero, por lo cual serán reparados en caso de presentar algún defecto de fabricación, siempre y cuando se constate que es producto de nuestra manufactura y que se haya instalado bajo la supervisión de un personal técnico especializado de PROYINTER.
                </p>
                <p>
                    Atentamente,
                    <br />
                    Lima, 07 de mayo del 2024
                    <br />
                    Proyintereirl@gmail.com
                    <br />
                    Evelyn de la Cruz R.
                    <br />
                    GERENTE GENERAL
                </p>
            </div>
            <div className="back-link">
                <Link to="/cliente/informacion-tecnica-equipos">Volver a Información Técnica de los Equipos</Link>
            </div>
        </div>
    );
};

export default CertificadoGarantia;
