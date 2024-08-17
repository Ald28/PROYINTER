import React, { useState } from 'react';
import './DatosOperacionPage.css';


const DatosOperacionPage = () => {
  const [selectedFluido, setSelectedFluido] = useState("");
  const [selectedConcentracion, setSelectedConcentracion] = useState("");
  const [selectedCaudal, setSelectedCaudal] = useState("");
  const [selectedPresion, setSelectedPresion] = useState("");
  const [selectedAmbiente, setSelectedAmbiente] = useState("");
  const [selectedTemperatura, setSelectedTemperatura] = useState("");
  const [selectedAltitud, setSelectedAltitud] = useState("");
  const [selectedHumedad, setSelectedHumedad] = useState("");

  const handleFluidoChange = (event) => setSelectedFluido(event.target.value);
  const handleConcentracionChange = (event) => setSelectedConcentracion(event.target.value);
  const handleCaudalChange = (event) => setSelectedCaudal(event.target.value);
  const handlePresionChange = (event) => setSelectedPresion(event.target.value);
  const handleAmbienteChange = (event) => setSelectedAmbiente(event.target.value);
  const handleTemperaturaChange = (event) => setSelectedTemperatura(event.target.value);
  const handleAltitudChange = (event) => setSelectedAltitud(event.target.value);
  const handleHumedadChange = (event) => setSelectedHumedad(event.target.value);

  return (
    <div className="datos-operacion-page">
      <h2>Solicitud de Oferta para un Skid de Dosificación: Datos de Operación</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="text-left">N°</th>
            <th className="text-left">Datos de Operación</th>
            <th className="text-left">Seleccionar datos de Operación</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">1</td>
            <td className="text-left">Fluidos</td>
            <td className="text-left">
              <select value={selectedFluido} onChange={handleFluidoChange} className="form-select">
                <option value="">Seleccionar Fluido</option>
                <option value="Lechada de Cal">Lechada de Cal</option>
                <option value="FrothCollec">Floculante</option>
                <option value="Ácido Sulfúrico">Ácido Sulfúrico</option>
                <option value="Cloruro Férrico">Cloruro Férrico</option>
                <option value="Soda Cáustica">Espumante/Antiespumante</option>
                <option value="Sulfuros de Sodio">Soda Cáustica</option>
                <option value="Sulfato de Cobre/Zinc">Carbon Activado</option>
                <option value="Hipoclorito de Sodio">Hipoclorito de Sodio</option>
                <option value="Ácido Nítrico">Sulfato de Cobre/Zinc</option>
                <option value="Ácido Fosfórico">Xantatos</option>
                <option value="Permanganato de Sodio">Cianuro de Sodio</option>
                <option value="Floculante">Metabisulfito de Sodio</option>
                <option value="Aceite/Floculante">Acido Nitrico/Clorhidrico</option>
                <option value="Clorato de Sodio">Peroxido de Hidrogeno</option>
                <option value="Nafta">Nash (Sulfhidrato de Sodio)</option>
                <option value="Bióxido de Carbono">Diesel</option>
                <option value="Bióxido de cloro">Biosida</option>
                <option value="Hidrosulfuro de Sodio">Inhibidor de corrosion/incrustacion</option>
                <option value="Ácido Fosfórico">Acido Fosforico</option>
                <option value="Otros">Otros</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">2</td>
            <td className="text-left">Concentración de Fluido</td>
            <td className="text-left">
              <select value={selectedConcentracion} onChange={handleConcentracionChange} className="form-select">
                <option value="">Seleccionar concentración del fluido</option>
                <option value="0% - 10%">0% - 10%</option>
                <option value="10% - 30%">10% - 30%</option>
                <option value="30% - 60%">30% - 60%</option>
                <option value="60% - 98%">60% - 98%</option>
                <option value="98% - 100%">98% - 100%</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">3</td>
            <td className="text-left">Caudal</td>
            <td className="text-left">
              <select value={selectedCaudal} onChange={handleCaudalChange} className="form-select">
                <option value="">Seleccionar caudal</option>
                <option value="Rango 1">Rango 1: 0 - 60 l/h</option>
                <option value="Rango 2">Rango 2: 60 - 600 l/h</option>
                <option value="Rango 3">Rango 3: 600 - 1200 l/h</option>
                <option value="Rango 4">Rango 4: 1200 - 3000 l/h</option>
                <option value="Rango 5">Rango 5: 3000 - 6000 l/h</option>
                <option value="Rango 6">Rango 6: 6000 - 10000 l/h</option>
                <option value="Rango 7">Rango 7: Otros</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">4</td>
            <td className="text-left">Presión</td>
            <td className="text-left">
              <select value={selectedPresion} onChange={handlePresionChange} className="form-select">
                <option value="">Seleccionar presión</option>
                <option value="0 - 2 bar">0 - 2 bar</option>
                <option value="2 - 4 bar">2 - 4 bar</option>
                <option value="4 - 8 bar">4 - 8 bar</option>
                <option value="8 - 16 bar">8 - 16 bar</option>
                <option value="16 - 20 bar">16 - 20 bar</option>
                <option value="20 - 150 bar">20 - 150 bar</option>
                <option value="150 - 2000 bar">150 - 2000 bar</option>
                <option value="Otros">Otros</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">5</td>
            <td className="text-left">Ambiente de Operación</td>
            <td className="text-left">
              <select value={selectedAmbiente} onChange={handleAmbienteChange} className="form-select">
                <option value="">Seleccionar Ambiente de Operación</option>
                <option value="Interior">Bajo techo</option>
                <option value="Exterior">Interperie</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">6</td>
            <td className="text-left">Temperatura</td>
            <td className="text-left">
              <select value={selectedTemperatura} onChange={handleTemperaturaChange} className="form-select">
                <option value="">Seleccionar temperatura</option>
                <option value="-25 a 25°C">-25 a 25°C</option>
                <option value="0 a 40°C">0 a 40°C</option>
                <option value="40 a 100°C">40 a 100°C</option>
                <option value="Otros">Otros</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">7</td>
            <td className="text-left">Altitud de Operación</td>
            <td className="text-left">
              <select value={selectedAltitud} onChange={handleAltitudChange} className="form-select">
                <option value="">Seleccionar Altitud de Operación</option>
                <option value="0 - 1000 MSNMM">0 - 1000 MSNM</option>
                <option value="1000 - 2500 MSNM">1000 - 2500 MSNM</option>
                <option value="2500 - 4500 MSNM">2500 - 4500 MSNM</option>
                <option value="4500 - 5500 MSNM">4500 - 5500 MSNM</option>
                <option value="Otros">Otros</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-left">8</td>
            <td className="text-left">Humedad relativa de Operación</td>
            <td className="text-left">
              <select value={selectedHumedad} onChange={handleHumedadChange} className="form-select">
                <option value="">Seleccionar humedad relativa de operación</option>
                <option value="0 al 30%">0 al 30%</option>
                <option value="30 al 60%">30 al 60%</option>
                <option value="60 al 80%">60 al 80%</option>
                <option value="80 al 100%">80 al 100%</option>
                <option value="Otros">Otros</option>
              </select>
            </td>
            <td className="text-center">
              <button className="btn-guardar">
                <i className="fas fa-save"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosOperacionPage;
