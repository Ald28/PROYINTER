import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/common/Input';
import logo from '../assets/images/Logo_proyinter.png';
import derecha from '../assets/images/login_derecha.png';
import '../assets/styles/login.css';

const LoginPage = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const manejarLogin = (e) => {
        e.preventDefault();
        console.log('Correo:', correo);
        console.log('Contraseña:', contraseña);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <img src={logo} alt="Proyinter Logo" className="login-logo mb-4" />
                    <h1 className="text-center mb-4">ACCESO AL PORTAL DEL CLIENTE</h1>
                    <form onSubmit={manejarLogin} className="w-75">
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
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                    <p className="mt-3"><Link to="#">¿Olvidaste tu contraseña?</Link></p>
                    <p>¿No tienes una cuenta? <Link to="#">Regístrate</Link></p>
                </div>
                <div className="login-image">
                    <img src={derecha} alt="Login" className="w-100 h-100" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
