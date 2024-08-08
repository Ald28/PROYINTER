import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import '../assets/styles/Shipping.css';

const Shipping = () => {
  const navigate = useNavigate();

  return (
    <div className="shipping-container">
      <h2>Despacho</h2>
      <button onClick={() => navigate('/cliente/guia-remision')} className="shipping-button">
        <FaTools className="icon" /> Guía de remisión
      </button>
      <button onClick={() => navigate('/cliente/packing-list')} className="shipping-button">
        <FaTools className="icon" /> Packing list
      </button>
    </div>
  );
};

export default Shipping;

