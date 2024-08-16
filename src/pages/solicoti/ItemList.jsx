import React, { useState } from 'react';
import MenuSolicitarOferta from './MenuSolicitarOferta';

const ItemList = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSolicitarOfertaClick = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <h1>Procura</h1>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Tipo de Servicio</th>
            <th>Descripción del Servicio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Procura</td>
            <td>Suministro y/o Fabricación</td>
            <td>
              <button onClick={handleSolicitarOfertaClick}>
                Solicitar Oferta
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {showMenu && <MenuSolicitarOferta onClose={handleCloseMenu} />}
    </div>
  );
};

export default ItemList;
