import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/Perfil.css';

export default function Perfil() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    country: '',
    name_empresa: '',
    rubro_empresa: '',
    phone: '',
    charge: '',
  });

  useEffect(() => {
    fetch('http://localhost:8000/api/user-profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.userData) {
          const clienteData = data.userData.cliente || {};
          setUserData(data.userData);
          setFormData({
            name: clienteData.name || '',
            lastname: clienteData.lastname || '',
            country: clienteData.country || '',
            name_empresa: clienteData.name_empresa || '',
            rubro_empresa: clienteData.rubro_empresa || '',
            phone: clienteData.phone || '',
            charge: clienteData.charge || '',
          });
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/user-update', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.message || 'Error al actualizar los datos') });
        }
        return response.json();
      })
      .then(data => {
        alert('Datos actualizados correctamente');
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error al actualizar los datos: ' + error.message);
      });
  };

  if (loading) {
    return <div className="container">Cargando...</div>;
  }

  if (error) {
    return <div className="container"><p className="error">{error}</p></div>;
  }

  return (
    <div className="container">
      {userData && (
        <div className="profile-container">
          <h1 className="title">Perfil de Usuario</h1>
          <div className="profile-content">
            {isEditing ? (
              <Modal
                isOpen={isEditing}
                onRequestClose={() => setIsEditing(false)}
                contentLabel="Editar Perfil"
                className="modal-content"
              >
                <form onSubmit={handleSubmit}>
                  {Object.keys(formData).map((key, index) => {
                    let label = "";
                    switch (key) {
                      case "name":
                        label = "Nombre";
                        break;
                      case "lastname":
                        label = "Apellido";
                        break;
                      case "country":
                        label = "País";
                        break;
                      case "name_empresa":
                        label = "Nombre de la Empresa";
                        break;
                      case "rubro_empresa":
                        label = "Rubro de la Empresa";
                        break;
                      case "phone":
                        label = "Celular";
                        break;
                      case "charge":
                        label = "Cargo";
                        break;
                      default:
                        label = key.replace('_', ' ').toUpperCase();
                    }
                    return (
                      <div className="form-field" key={key}>
                        <label className="label">{label}:</label>
                        <input
                          type="text"
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    );
                  })}

                  <button className="button" type="submit">Actualizar</button>
                  <button className="button" type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
                </form>
              </Modal>
            ) : (
              <>
                {Object.keys(userData.cliente).filter(key => key !== 'id' && key !== 'created_at' && key !== 'updated_at').map((key) => {
                  let label = "";
                  switch (key) {
                    case "name":
                      label = "Nombre";
                      break;
                    case "lastname":
                      label = "Apellido";
                      break;
                    case "country":
                      label = "País";
                      break;
                    case "name_empresa":
                      label = "Nombre de la Empresa";
                      break;
                    case "rubro_empresa":
                      label = "Rubro de la Empresa";
                      break;
                    case "phone":
                      label = "Celular";
                      break;
                    case "charge":
                      label = "Cargo";
                      break;
                    default:
                      label = key.replace('_', ' ').toUpperCase();
                  }
                  return <p className="profile-item" key={key}><strong>{label}:</strong> {userData.cliente[key]}</p>
                })}

                <button className="button" onClick={() => setIsEditing(true)}>Editar</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
