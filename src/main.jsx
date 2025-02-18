import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './estilos/estilo.css';
import './estilos/header.css';
import './estilos/hero.css';
import './estilos/resort.css';
import './estilos/habitacionesYsuites.css';
import './estilos/actividadesYservicios.css';
import './estilos/contacto.css';
import './estilos/formulario.css';
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Resort from './components/resort.jsx';
import HabitacionesYvillas from './components/habitacionesYvillas.jsx';
import Servicios from './components/actividadesYservicios.jsx';
import Contacto from './components/contacto.jsx';
import Formulario from './pages/formulario.jsx';
import Villas from './pages/villas.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Paradisus">
      <Routes>
          <Route path="*" element={
            <>
              <Header />
              <Hero />
              <Resort />
              <HabitacionesYvillas />
              <Servicios />
              <Contacto />
            </>
          } />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/villas" element={<Villas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);