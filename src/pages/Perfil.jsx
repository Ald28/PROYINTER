import React, { useEffect, useState } from 'react';

export default function Perfil() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/user-profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data.userData);
        setLoading(false);
      })
      .catch(error => {
        setError('Error al cargar los datos del usuario');
        setLoading(false);
      });
  }, []);

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
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Perfil:</strong> {userData.perfil}</p>
          {userData.cliente && (
            <div>
              <h2>Datos del Cliente</h2>
              <p><strong>Nombre:</strong> {userData.cliente.name}</p>
              <p><strong>Apellido:</strong> {userData.cliente.lastname}</p>
              <p><strong>País:</strong> {userData.cliente.country}</p>
              <p><strong>Empresa:</strong> {userData.cliente.name_empresa}</p>
              <p><strong>Rubro:</strong> {userData.cliente.rubro_empresa}</p>
              <p><strong>Teléfono:</strong> {userData.cliente.phone}</p>
              <p><strong>Cargo:</strong> {userData.cliente.charge}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
