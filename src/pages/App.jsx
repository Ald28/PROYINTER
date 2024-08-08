import React, { useState } from 'react';
import Shipping from './Shipping';
import RemissionGuide from './RemissionGuide';
import ItemList from './ItemList';
import '../assets/styles/index.css';

function App() {
  const [view, setView] = useState('shipping');

  const navigate = (view) => {
    setView(view);
  };

  return (
    <div className="container">
      <div className="menu">
        <button onClick={() => navigate('shipping')}>Despacho</button>
        {/* Otros botones y opciones del menú */}
      </div>
      <div className="content">
        {view === 'shipping' && <Shipping navigate={navigate} />}
        {view === 'remission-guide' && <RemissionGuide />}
        {view === 'item-list' && <ItemList />}
      </div>
    </div>
  );
}

export default App;

