import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/ContSoporteTec.css'; // Asegúrate de que la ruta sea correcta

const ContSoporteTec = () => {
    const [contactMethod, setContactMethod] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [showSelect, setShowSelect] = useState(false);

    useEffect(() => {
        if (contactMethod === 'Chat') {
            Swal.fire({
                title: '¿Desea contactarse por WhatsApp?',
                text: 'Se le redirigirá a WhatsApp para iniciar el chat.',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Sí, redirigirme',
                cancelButtonText: 'No, volver',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://wa.me/1234567890'; // Cambia este número por el número de WhatsApp al que deseas redirigir
                } else {
                    setContactMethod(''); // Si el usuario decide no continuar, reiniciamos la selección
                }
            });
        } else if (contactMethod === 'phone') {
            Swal.fire({
                title: '¿Desea realizar una llamada telefónica?',
                text: 'Le proporcionaremos un número de teléfono para que pueda contactarnos.',
                icon: 'info',
                confirmButtonText: 'Llamar ahora',
                cancelButtonText: 'Cancelar',
                showCancelButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'tel:+51999999999'; // Cambia este número por el número de teléfono al que deseas redirigir
                } else {
                    setContactMethod(''); // Si el usuario decide no continuar, reiniciamos la selección
                }
            });
        }
    }, [contactMethod]);

    const handleContactMethodChange = (e) => {
        setContactMethod(e.target.value);
    };

    const handleDateChange = (e) => {
        setAppointmentDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setAppointmentTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const problemaDescripcion = document.getElementById('problemaDescripcion').value;

        if (!problemaDescripcion || !contactMethod || !appointmentDate || !appointmentTime) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos obligatorios.',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Formulario enviado correctamente.',
        });
    };

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black" to="/cliente">
                            Cliente
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black" to="/cliente/soporte-tecnico">
                            Servicio Técnico
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Formulario</li>
                </ol>
            </nav>

            <form
                className="cont-soporte-tec mx-auto"
                onSubmit={handleSubmit}
            >
                <h1>Contacto con un asesor</h1>
                <div className="row align-items-center mt-2">
                    <div className="col-md-6 border-end pe-2 d-flex align-items-center">
                        <p className='form-label mb-1 me-2'>
                            1. ¿Desea recibir soporte técnico sobre algún servicio adquirido?
                        </p>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="soporte"
                                id="soporteSi"
                                onChange={() => setShowSelect(true)}
                            />
                            <label className="form-check-label" htmlFor="soporteSi">
                                Sí
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="soporte"
                                id="soporteNo"
                                defaultChecked
                                onChange={() => setShowSelect(false)}
                            />
                            <label className="form-check-label" htmlFor="soporteNo">
                                No
                            </label>
                        </div>
                    </div>

                    {showSelect && (
                        <div className="col-md-6">
                            <div className="d-flex align-items-center mb-2 mt-2">
                                <p className='form-label mb-0 me-2'>
                                    Selecciona una opción adicional:
                                </p>
                                <select className="form-select form-select-sm" aria-label="Opciones adicionales">
                                    <option value="">Seleccione...</option>
                                    <option value="opcion1">Opción 1</option>
                                    <option value="opcion2">Opción 2</option>
                                    <option value="opcion3">Opción 3</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 border-end pe-3">
                        <hr />
                        <p className='fw-bold'>
                            2. ¿Cómo desea contactarse con su asesor?
                        </p>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="contactMethod"
                                id="contactChat"
                                value="Chat"
                                checked={contactMethod === 'Chat'}
                                onChange={handleContactMethodChange}
                            />
                            <label className="form-check-label" htmlFor="contactChat">
                                Chat
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="contactMethod"
                                id="contactPhone"
                                value="phone"
                                checked={contactMethod === 'phone'}
                                onChange={handleContactMethodChange}
                            />
                            <label className="form-check-label" htmlFor="contactPhone">
                                Llamada Telefónica
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="contactMethod"
                                id="contactReunion"
                                value="Reunion"
                                checked={contactMethod === 'Reunion'}
                                onChange={handleContactMethodChange}
                            />
                            <label className="form-check-label" htmlFor="contactReunion">
                                Reunión Virtual
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="contactMethod"
                                id="contactVisita"
                                value="Visita"
                                checked={contactMethod === 'Visita'}
                                onChange={handleContactMethodChange}
                            />
                            <label className="form-check-label" htmlFor="contactVisita">
                                Visita Técnica
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 border-start ps-3">
                        <hr />
                        <p className='fw-bold'>
                            3. Seleccione una fecha y hora
                        </p>
                        <input
                            type="date"
                            className="form-control date-time-input"
                            id="appointmentDate"
                            value={appointmentDate}
                            onChange={handleDateChange}
                            required
                        />
                        <input
                            type="time"
                            className="form-control mt-2 date-time-input"
                            id="appointmentTime"
                            value={appointmentTime}
                            onChange={handleTimeChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6 border-end pe-3">
                        <hr />
                        <p className='fw-bold'>
                            4. Describa el problema (Máximo 100 caracteres)
                        </p>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Descripción del problema"
                                id="problemaDescripcion"
                                maxLength="100"
                                style={{ height: '90px' }}
                                required
                            ></textarea>
                            
                        </div>
                    </div>
                    <div className='col-md-2 btn-container'>
                        <button type="submit" className="btn degradado">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContSoporteTec;
