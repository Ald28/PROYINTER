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

    const manejarLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: correo,
                    password: contraseña,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);  // Guardar el token de autenticación
                localStorage.setItem('cliente', correo);     // Guardar el correo del cliente
                localStorage.setItem('nombreUsuario', data.nombre);  // Guardar el nombre del usuario
    
                toast.success('Bienvenido', {
                    position: "top-right",
                    autoClose: 600,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    onClose: () => navigate('/cliente'),  // Redirigir a la página de cliente
                    className: 'toast-message-single-line'
                });
                
            } else {
                toast.error('Correo o contraseña incorrectos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'toast-message-single-line'
                });
            }
        } catch (error) {
            toast.error('Error al conectar con el servidor', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
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
                    <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
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
