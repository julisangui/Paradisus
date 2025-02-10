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
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Resort from './components/resort.jsx';
import Habitaciones from './components/habitacionesYsuites.jsx';
import Servicios from './components/actividadesYservicios.jsx';
import Contacto from './components/contacto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Resort />
    <Habitaciones />
    <Servicios />
    <Contacto />
  </React.StrictMode>
);