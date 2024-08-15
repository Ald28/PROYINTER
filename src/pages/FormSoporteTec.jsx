import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/FormSoporte.css';

// Componente para el botón de archivo
const FileInputButton = ({ onClick, disabled }) => (
    <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={onClick}
        disabled={disabled}
        style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            borderRadius: '50%',
            width: '40px', // Ajusta el tamaño del botón
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '100px',
            justifyContent: 'center',
        }}
    >
        <FaPlus style={{ fontSize: '25px' }} /> {/* Tamaño del ícono */}
    </button>
);

// Componente para la lista de archivos
const FileList = ({ files, onRemoveFile }) => (
    <div className="file-list-container">
        {files.map((file, index) => (
            <div key={index} className="file-item mt-2">
                <input
                    type="text"
                    className="form-control form-control"
                    value={file.name}
                    readOnly
                    style={{ fontFamily: 'Inter, sans-serif', width: '1200px' }}
                />
                <button
                    type="button"
                    className="btn btn-link"
                    style={{marginRight:'28px'}}
                    onClick={() => onRemoveFile(index)}
                >
                    <FaTrash />
                </button>
            </div>
        ))}
    </div>
);

const FormSoporteTec = () => {
    const [files, setFiles] = useState([]);
    const [showSelect, setShowSelect] = useState(false);

    const handleFileChange = (e) => {
        if (files.length < 3) {
            setFiles([...files, ...e.target.files]);
        }
    };

    const handleRemoveFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleAddFileInput = () => {
        if (files.length < 3) {
            document.getElementById('fileInput').click();
        }
    };

    const handleSoporteChange = (e) => {
        setShowSelect(e.target.id === 'soporteSi');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación
        const problemaDescripcion = document.getElementById('problemaDescripcion').value;
        const vinculoContenido = document.querySelector('input[placeholder="Vínculo del contenido"]').value;

        if (!problemaDescripcion || !vinculoContenido) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos obligatorios.',
            });
            return;
        }

        // Aquí podrías agregar la lógica para enviar el formulario
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Formulario enviado correctamente.',
        });
    };

    return (
        <div className="container" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                className="mx-auto mt-5"
                style={{ maxWidth: '1000px', border: '3px solid blue', borderRadius: '15px', padding: '20px' }}
                onSubmit={handleSubmit}
            >
                <h1 className="text-center mt-3" style={{ fontWeight: 'bold' }}>
                    Formulario de Soporte Técnico
                </h1>
                <div className="row align-items-center mt-4">
                    <div className="col-md-6 mt-4 border-end pe-3">
                        <p className='fw-bold mt-2'>1. ¿Desea recibir soporte técnico sobre algún servicio adquirido?</p>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="soporte"
                                id="soporteSi"
                                onChange={handleSoporteChange}
                            />
                            <label className="form-check-label" htmlFor="soporteSi" style={{ fontWeight: 'bold' }}>
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
                                onChange={handleSoporteChange}
                            />
                            <label className="form-check-label" htmlFor="soporteNo" style={{ fontWeight: 'bold' }}>
                                No
                            </label>
                        </div>
                    </div>
                    {showSelect && (
                        <div className="col-md-6">
                            <div className="mb-3 mt-4">
                                <p className='fw-bold'>1.1 Selecciona una opción adicional:</p>
                                <select className="form-select" aria-label="Opciones adicionales">
                                    <option value="">Seleccione...</option>
                                    <option value="opcion1">Opción 1</option>
                                    <option value="opcion2">Opción 2</option>
                                    <option value="opcion3">Opción 3</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
                <hr/>

                <div className="col">
                    <div className="row p-2">
                        <p className='fw-bold'>2. Describa el problema (Máximo 1000 caracteres)</p>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Descripción del problema"
                                id="problemaDescripcion"
                                maxLength="1000"
                                style={{ height: '100px' }}
                                required
                            ></textarea>
                            <label htmlFor="problemaDescripcion">Descripción del problema</label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row p-3">
                    <div className="col-md-12">
                        <div className="d-flex align-items-center">
                            <p className='fw-bold mb-0'>
                                3. Adjunte el archivo si desea ampliar el problema (Máximo 3 archivos de 10MB cada uno)
                            </p>
                            <FileInputButton
                                onClick={handleAddFileInput}
                                disabled={files.length >= 3}
                                className=""
                            />
                        </div>

                        <div className="input-group mt-3">
                            <input
                                type="file"
                                id="fileInput"
                                className="form-control"
                                multiple
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                    <div className="ms-1">
                        <FileList files={files} onRemoveFile={handleRemoveFile} />
                    </div>
                </div>

                <hr/>
                <div className="row mb-4">
                    <div className="col-md-6 border-end pe-3">
                        <p className='fw-bold'>4. Pegue un vínculo de video, nube de archivos u otro contenido si desea detallar el problema</p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Vínculo del contenido"
                            required
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <button type="submit" className="btn degradado" style={{ fontWeight: 'bold' }}>
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormSoporteTec;
