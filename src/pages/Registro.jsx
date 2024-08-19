import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2
import logo from '../assets/images/Logo_proyinter.png';
import derecha from '../assets/images/login.png';
import '../assets/styles/registro.css';

const paises = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "República Dominicana",
    "Uruguay",
    "Venezuela"
];

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

    const manejarRegistro = async (e) => {
        e.preventDefault();

        if (contraseña !== confirmarContraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas no coinciden',
                text: 'Por favor, verifica que ambas contraseñas coincidan.',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                
            });
            return;
        }
        
        const datosRegistro = {
            name: nombreCompleto,
            lastname: apellidos,
            country: pais,
            name_empresa: nombreEmpresa,
            rubro_empresa: rubro,
            email: correo,
            phone: telefono,
            charge: cargoArea,
            password: contraseña,
            password_confirmation: confirmarContraseña
        };

        try {
            
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosRegistro)
            });
            
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    text: 'Has sido registrado exitosamente.',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didClose: () => navigate('/') 
                });
            } else {
                const errorData = await response.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el registro',
                    text: errorData.message || 'Hubo un problema en el registro.',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el servidor',
                text: 'No se pudo completar el registro. Inténtalo de nuevo más tarde.',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    };

    const manejarTelefonoChange = (e) => {
        const valor = e.target.value.replace(/\D/g, '');
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
                                <select 
                                    className="form-control"
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Selecciona un país</option>
                                    {paises.map((pais, index) => (
                                        <option key={index} value={pais}>{pais}</option>
                                    ))}
                                </select>
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
