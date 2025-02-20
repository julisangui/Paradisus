import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const cambiarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLinkClick = (section) => {
    setMenuVisible(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    }
    else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button id="abrir" className="abrir-menu" onClick={cambiarMenu}>
        <i className="bi bi-list"></i>
      </button>

      <nav className={`barra-navegacion ${menuVisible ? "visible" : ""}`} id="nav">
        <button className="cerrar-menu" id="cerrar" onClick={cambiarMenu}><i className="bi bi-x"></i></button>
        <a className="menu" onClick={() => handleLinkClick("resort")}>El resort</a>
        <a className="menu" onClick={() => handleLinkClick("habitacionesYvillas")}>Habitaciones & Villas</a>
        <a onClick={() => handleLinkClick("Hero")} className="logo-container"><img className="logo" src={Logo} alt="Logo"/></a>        
        <a className="menu" onClick={() => handleLinkClick("actividadesYservicios")}>Actividades & Servicios</a>
        <a className="menu" onClick={() => handleLinkClick("contacto")}>Contacto</a>
      </nav>
    </>
  );
};

export default Header;