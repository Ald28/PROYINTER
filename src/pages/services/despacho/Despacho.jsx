import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faListUl } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/styles/Despacho.css';
import { Container } from 'react-bootstrap';

const Despacho = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const handleLinkClick = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 430);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleBackClick = () => {
        navigate(-1); // Navega hacia atrás en la historia
    };

    return (
        <div className="despacho-container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {!isMobile && (
                        <>
                            <li className="breadcrumb-item">
                                <Link className="btn btn-link p-0 fw-bold" to="/cliente">Cliente</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link className="btn btn-link p-0 fw-bold" to="/cliente/ver-base-instalada">Servicios Adquiridos</Link>
                            </li>
                        </>
                    )}
                    <li className="breadcrumb-item fw-bold">
                        <Link className="btn btn-link p-0 fw-bold" to="/cliente/servicio">Procura Tanque Fibra</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Despacho</li>
                </ol>
            </nav>

            <button className="circle-button-back mb-3" onClick={handleBackClick}>
                <i className="fa fa-arrow-left"></i>
                <span className='text-black'>Atrás</span>
            </button>

            <h2 className="text-center">Despacho</h2>

            <Container className="d-flex flex-column align-items-center mx-auto mt-4" style={{ maxWidth: '360px' }}>
                <button className="despacho-button fw-bold mb-3 w-100" onClick={() => handleLinkClick('/cliente/despacho/guia-remision')}>
                    <FontAwesomeIcon icon={faFileCircleCheck} className="button-icon" />
                    <span>Guía de Remisión</span>
                </button>
                <button className="despacho-button mb-3 w-100" onClick={() => handleLinkClick('/cliente/despacho/packing-list')}>
                    <FontAwesomeIcon icon={faListUl} className="button-icon" />
                    <span>Packing List</span>
                </button>
            </Container>
        </div>
    );
};

export default Despacho;
