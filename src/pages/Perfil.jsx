import React, { useEffect, useState } from 'react';

export default function Perfil() {
  const [userData, setUserData] = useState();
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
        // Asegúrate de que `data.userData.cliente` existe antes de asignarlo
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
        setError(error);
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
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {userData && (
        <div>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Apellido:</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>País:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Nombre de la Empresa:</label>
                <input
                  type="text"
                  name="name_empresa"
                  value={formData.name_empresa}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Rubro de la Empresa:</label>
                <input
                  type="text"
                  name="rubro_empresa"
                  value={formData.rubro_empresa}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Teléfono:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Cargo:</label>
                <input
                  type="text"
                  name="charge"
                  value={formData.charge}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Actualizar</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
            </form>
          ) : (
            <div>
              <p><strong>Nombre:</strong> {userData.cliente.name}</p>
              <p><strong>Apellido:</strong> {userData.cliente.lastname}</p>
              <p><strong>País:</strong> {userData.cliente.country}</p>
              <p><strong>Nombre de la Empresa:</strong> {userData.cliente.name_empresa}</p>
              <p><strong>Rubro de la Empresa:</strong> {userData.cliente.rubro_empresa}</p>
              <p><strong>Teléfono:</strong> {userData.cliente.phone}</p>
              <p><strong>Cargo:</strong> {userData.cliente.charge}</p>
              <button onClick={() => setIsEditing(true)}>Editar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
