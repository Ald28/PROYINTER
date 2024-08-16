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
        className="btn btn-primary btn-sm file-input-button"
        onClick={onClick}
        disabled={disabled}
    >
        <FaPlus style={{ fontSize: '14px' }} />
    </button>
);

// Componente para la lista de archivos
const FileList = ({ files, onRemoveFile }) => (
    <div className="file-list-container">
        {files.map((file, index) => (
            <div key={index} className="file-item d-flex align-items-center mt-1">
                <input
                    type="text"
                    className="form-control form-control-sm"
                    value={file.name}
                    readOnly
                />
                <button
                    type="button"
                    className="btn btn-link btn-sm"
                    onClick={() => onRemoveFile(index)}
                >
                    <FaTrash style={{ fontSize: '12px' }} />
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
                        <Link className="btn btn-black btn-sm" to="/cliente">
                            Cliente
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black btn-sm" to="/cliente/soporte-tecnico">
                            Servicio Técnico
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Formulario</li>
                </ol>
            </nav>
            
            <form
                className="form-soporte mx-auto mt-2"
                onSubmit={handleSubmit}
            >
                <h1 className="text-center mt-1">
                    Formulario de Soporte Técnico
                </h1>
                
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
                                onChange={handleSoporteChange}
                            />
                            <label className="form-check-label" htmlFor="soporteSi">
                                Sí
                            </label>
                        </div>
                        <div className="form-check form-check-inline ms-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="soporte"
                                id="soporteNo"
                                defaultChecked
                                onChange={handleSoporteChange}
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

                <hr />

                <div className="col">
                    <div className="row p-1">
                        <p className='form-label'>
                            2. Describa el problema (Máximo 1000 caracteres)
                        </p>
                        <div className="form-floating">
                            <textarea
                                className="form-control form-control-sm"
                                id="problemaDescripcion"
                                maxLength="1000"
                                style={{ height: '50px' }}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row p-1 justify-content-center">
                    <div className="col-md-12 d-flex flex-column align-items-center">
                        <div className="d-flex align-items-center mb-2">
                            <p className='form-label mb-0'>
                                3. Adjunte el archivo si desea ampliar el problema (Máximo 3 archivos de 10MB cada uno)
                            </p>
                            <FileInputButton
                                onClick={handleAddFileInput}
                                disabled={files.length >= 3}
                            />
                        </div>

                        <div className="input-group mt-1">
                            <input
                                type="file"
                                id="fileInput"
                                className="form-control form-control-sm"
                                multiple
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>

                        <div className="mt-1">
                            <FileList files={files} onRemoveFile={handleRemoveFile} />
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="row mb-2">
                    <div className="col-md-10 border-end pe-2">
                        <p className='form-label'>
                            4. Pegue un vínculo de video, nube de archivos u otro contenido si desea detallar el problema
                        </p>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Vínculo del contenido"
                            required
                        />
                    </div>
                    <div className="col-md-2 btn-container">
                        <button type="submit" className="btn degradado">
                            Enviar
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default FormSoporteTec;
