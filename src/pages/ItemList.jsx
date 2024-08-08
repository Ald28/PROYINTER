import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css'; // Ruta ajustada
import { FaEye, FaDownload } from 'react-icons/fa';
import '../assets/styles/ItemList.css';

const ItemList = () => {
  useEffect(() => {
    if (!$.fn.DataTable.isDataTable('#itemTable')) {
      $('#itemTable').DataTable({
        language: {
          paginate: {
            previous: '<',
            next: '>',
            first: '<<',
            last: '>>'
          }
        }
      });
    }
  }, []);

  return (
    <div className="item-list-container">
      <h2>Packing List</h2>
      <table id="itemTable" className="display">
        <thead>
          <tr>
            <th className="table-header">Dossier</th>
            <th className="table-header">Fecha</th>
            <th className="table-header">Ver</th>
            <th className="table-header">Descargar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MB_DC_PACKING LIST TANK FIB. VIDR._001.pdf</td>
            <td>11 jul, 2024</td>
            <td><button className="icon-button"><FaEye /></button></td>
            <td><button className="icon-button"><FaDownload /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;

