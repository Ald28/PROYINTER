import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2
import logo from '../assets/images/Logo_proyinter.png';
import derecha from '../assets/images/login.png';
import '../assets/styles/registro.css';

const Registro = () => {
    const [pais, setPais] = useState('');
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [rubro, setRubro] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cargoArea, setCargoArea] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const navigate = useNavigate();

    const manejarRegistro = (e) => {
        e.preventDefault();

        if (contraseña !== confirmarContraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas no coinciden',
                text: 'Por favor, verifica que ambas contraseñas coincidan.',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                didClose: () => {
                    // Optionally do something on close
                }
            });
            return;
        }

        // Aquí se puede añadir la lógica para enviar los datos al servidor o almacenarlos
        // Por ahora, solo muestra un mensaje de éxito

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Has sido registrado exitosamente.',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            didClose: () => navigate('/cliente')  // Redirigir después de la alerta
        });
    };

    const manejarTelefonoChange = (e) => {
        // Eliminar caracteres no numéricos
        const valor = e.target.value.replace(/\D/g, '');

        // Limitar a 9 dígitos
        if (valor.length <= 9) {
            setTelefono(valor);
        }
    };

    return (
        <div className="registro-page">
            <div className="registro-container">
                <div className="registro-form">
                    <img src={logo} alt="Proyinter Logo" className="registro-logo" />
                    <p>FORMULARIO DE REGISTRO DE CLIENTE</p>
                    <form onSubmit={manejarRegistro}>
                        <p className="texto">Datos de la Empresa:</p>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='País'
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Rubro de la Empresa'
                                    value={rubro}
                                    onChange={(e) => setRubro(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Nombre de la Empresa'
                                value={nombreEmpresa}
                                onChange={(e) => setNombreEmpresa(e.target.value)}
                                required
                            />
                        </div>
                        <p className="texto">Datos Personales:</p>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='Nombre Completo'
                                    value={nombreCompleto}
                                    onChange={(e) => setNombreCompleto(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='Apellidos'
                                    value={apellidos}
                                    onChange={(e) => setApellidos(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='Cargo/Área'
                                    value={cargoArea}
                                    onChange={(e) => setCargoArea(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    placeholder='Teléfono'
                                    value={telefono}
                                    pattern="\d{9}"  // Exactamente 9 dígitos
                                    maxLength="9"   // Limitar a 9 caracteres
                                    onChange={manejarTelefonoChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder='Correo'
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Contraseña'
                                    value={contraseña}
                                    onChange={(e) => setContraseña(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Confirmar Contraseña'
                                    value={confirmarContraseña}
                                    onChange={(e) => setConfirmarContraseña(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <p>¿Ya tienes una cuenta? <a href="/">Iniciar Sesion</a></p>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </form>
                </div>
                <div className="registro-image">
                    <img src={derecha} alt="Login" />
                </div>
            </div>
        </div>
    );
};

export default Registro;
