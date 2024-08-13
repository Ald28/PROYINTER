import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

// Componente para el botón de archivo
const FileInputButton = ({ onClick, disabled }) => (
    <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={onClick}
        disabled={disabled}
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}
    >
        {disabled ? 'Máximo 3 archivos alcanzado' : <FaPlus />}
    </button>
);

// Componente para la lista de archivos
const FileList = ({ files, onRemoveFile }) => (
    <>
        {files.map((file, index) => (
            <div key={index} className="input-group mb-2 d-flex align-items-center">
                <input
                    type="text"
                    className="form-control form-control-sm flex-grow-1"
                    value={file.name}
                    readOnly
                    style={{ marginRight: '8px', fontFamily: 'Inter, sans-serif' }}
                />
                <button
                    type="button"
                    className="btn btn-link btn-sm p-0"
                    onClick={() => onRemoveFile(index)}
                    style={{ color: 'red' }}
                >
                    <FaTrash />
                </button>
            </div>
        ))}
    </>
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
            <h1 className="text-center mt-3" style={{ fontWeight: 'bold' }}>
                Formulario de Soporte Técnico
            </h1>

            <form
                    className="mx-auto mt-5"
                    style={{ maxWidth: '800px', border: '3px solid blue', borderRadius: '15px', padding: '20px' }}
                    onSubmit={handleSubmit}
                >
                <div className="mt-1">
                    <p className='fw-bold mt-2'>¿Desea recibir soporte técnico sobre algún servicio adquirido?</p>
                    <div className="row align-items-center">
                        <div className="col-md-6">
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
                                <div className="mb-3">
                                    <p className='fw-bold'>Selecciona una opción adicional:</p>
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
                </div>
                <div className="row mb-4 mt-5">
                    <div className="col-md-6">
                        <p className='fw-bold'>Describa el problema (Máximo 1000 caracteres)</p>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Descripción del problema"
                                id="problemaDescripcion"
                                maxLength="1000"
                                style={{ height: '150px' }}
                                required
                            ></textarea>
                            <label htmlFor="problemaDescripcion">Descripción del problema</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className='fw-bold'>Adjunte el archivo si desea ampliar el problema (Máximo 3 archivos de 10MB cada uno)</p>
                        <FileList files={files} onRemoveFile={handleRemoveFile} />
                        <div className="input-group mb-2">
                            <input
                                type="file"
                                id="fileInput"
                                className="form-control"
                                multiple
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                            <FileInputButton onClick={handleAddFileInput} disabled={files.length >= 3} />
                        </div>
                    </div>
                </div>
                <div className="container d-flex flex-column align-items-center justify-content-center mt-3">
                    <div className="align-items-center text-center">
                        <p className='fw-bold'>Pegue un vínculo de video, nube de archivos u otro contenido si desea detallar el problema</p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Vínculo del contenido"
                            required
                        />
                    </div>
                    <div className="text-center mt-4">
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
