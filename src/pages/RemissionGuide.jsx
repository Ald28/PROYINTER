import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css'; // Ruta ajustada
import { FaEye, FaDownload } from 'react-icons/fa';
import '../assets/styles/RemissionGuide.css';

const RemissionGuide = () => {
  useEffect(() => {
    if (!$.fn.DataTable.isDataTable('#remissionTable')) {
      $('#remissionTable').DataTable({
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
    <div className="remission-guide-container">
      <h2>Guía de Remisión</h2>
      <table id="remissionTable" className="display">
        <thead>
          <tr>
            <th className="table-header">Guía de Remisión</th>
            <th className="table-header">Fecha</th>
            <th className="table-header">Ver</th>
            <th className="table-header">Descargar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20601436036-09-EG07-7.pdf</td>
            <td>11 jul, 2024</td>
            <td><button className="icon-button"><FaEye /></button></td>
            <td><button className="icon-button"><FaDownload /></button></td>
          </tr>
          <tr>
            <td>20601436036-09-EG07-6.pdf</td>
            <td>11 jul, 2024</td>
            <td><button className="icon-button"><FaEye /></button></td>
            <td><button className="icon-button"><FaDownload /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RemissionGuide;




