import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import logo from '../assets/images/Logo_proyinter.png';
import derecha from '../assets/images/login.png';
import '../assets/styles/login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const manejarLogin = (e) => {
        e.preventDefault();

        if (correo && contraseña) {
            localStorage.setItem('cliente', correo);
            navigate('/cliente');
        } else {
            toast.error('Por favor ingresa tu correo y contraseña', {
            });
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <img src={logo} alt="Proyinter Logo" className="login-logo" />
                    <h1>ACCESO AL PORTAL DEL CLIENTE</h1>
                    <form onSubmit={manejarLogin}>
                        <Input
                            type="email"
                            placeholder="Correo electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <p><a href="#">¿Olvidaste tu contraseña?</a></p>
                    <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
                </div>
                <div className="login-image">
                    <img src={derecha} alt="Login" />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;
