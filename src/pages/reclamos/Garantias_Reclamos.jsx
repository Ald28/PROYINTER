import React, { useState, useEffect } from 'react'
import '../../assets/styles/Garantias_Reclamos.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileShield, faPersonCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

export default function Reclamos() {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
    };
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <button className="btn btn-black fw-bold p-0" onClick={() => handleLinkClick('/cliente')}>Cliente</button>
                    </li>
                    <li className="breadcrumb-item activate" aria-current="page">Garantias y Reclamos</li>
                </ol>
            </nav>
            <h2>Garantías y Reclamos </h2>
            <Container className="d-flex flex-column align-items-center mx-auto mt-4" style={{ maxWidth: '360px' }}>
                <button className="despacho-button fw-bold mb-3 w-100" onClick={() => handleLinkClick('/cliente/garantias-reclamos/garantias')}>
                    <FontAwesomeIcon icon={faFileShield} className='button-icon' />
                    <span>Garantías</span>
                </button>
                <button className="despacho-button mb-3 w-100" onClick={() => handleLinkClick('/cliente/garantias-reclamos/reclamos')}>
                    <FontAwesomeIcon icon={faPersonCircleExclamation} className='button-icon' />
                    <span>Reclamos</span>
                </button>
            </Container>
        </div>
    )
}