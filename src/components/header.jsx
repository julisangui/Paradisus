import { useState } from 'react';
import Logo from '../assets/Logo.png';

const header = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <button id="abrir" className="abrir-menu" onClick={toggleMenu}><i className="bi bi-list"></i></button>

      <nav className={`barra-navegacion ${menuVisible ? "visible" : ""}`} id="nav">
        <button className="cerrar-menu" id="cerrar" onClick={toggleMenu}><i className="bi bi-x"></i></button>
        <a href="#resort" className="menu" onClick={handleLinkClick}>El resort</a>
        <a href="#habitacionesYsuites" className="menu" onClick={handleLinkClick}>Habitaciones & Villas</a>
        <img className='logo' src={Logo}></img>
        <a href="#actividadesYservicios" className="menu" onClick={handleLinkClick}>Actividades & Servicios</a>
        <a href="#contacto" className="menu" onClick={handleLinkClick}>Contacto</a>
      </nav>
    </>
  );
};

export default header;