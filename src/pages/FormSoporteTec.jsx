import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ClientePage.css';

const FormSoporteTec = () => {
    const [files, setFiles] = useState([]);

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

    return (
        <div className="container mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente">Cliente</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-black fw-bold p-0" to="/cliente/soporte-tecnico">Servicio Técnico</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Formulario</li>
                </ol>
            </nav>
            <h2 className='text-center mt-3'>Formulario de Soporte Técnico</h2>
            <form className="mx-auto" style={{ maxWidth: '600px' }}>
                <div className="mb-3">
                    <p>¿Desea recibir soporte técnico sobre algún servicio adquirido?</p>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="soporte" id="soporteSi" />
                        <label className="form-check-label" htmlFor="soporteSi">Sí</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="soporte" id="soporteNo" defaultChecked />
                        <label className="form-check-label" htmlFor="soporteNo">No</label>
                    </div>
                </div>
                <div className="mb-3">
                    <p>Describa el problema (Máximo 100 caracteres)</p>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Descripción del problema" id="problemaDescripcion" maxLength="100" style={{ height: '100px' }}></textarea>
                        <label htmlFor="problemaDescripcion">Descripción del problema</label>
                    </div>
                </div>
                <div className="mb-3">
                    <p>Adjunte el archivo si desea ampliar el problema (Máximo 3 archivos de 10MB cada uno)</p>
                    {files.map((file, index) => (
                        <div key={index} className="input-group mb-2">
                            <input type="text" className="form-control" value={file.name} readOnly />
                            <button type="button" className="btn btn-danger fw-bold" onClick={() => handleRemoveFile(index)}>Eliminar</button>
                        </div>
                    ))}
                    <div className="input-group mb-2">
                        <input
                            type="file"
                            id="fileInput"
                            className="form-control"
                            multiple
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <button type="button" className="btn btn-primary fw-bold" onClick={handleAddFileInput}>
                            {files.length < 3 ? '+' : 'Máximo 3 archivos alcanzado'}
                        </button>
                    </div>
                </div>
                <div className="mb-3">
                    <p>Pegue un vínculo de video, nube de archivos u otro contenido si desea detallar el problema</p>
                    <input type="text" className="form-control" placeholder="Vínculo del contenido" />
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn degradado fw-bold">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default FormSoporteTec;
