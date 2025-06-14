import { useState } from "react";
import logoContacto from "../assets/Logo.png";
import axios from "axios";

const Contacto = () => {
  const formularioInicial = {
    nombre: "",
    email: "",
    consulta: "",
  };

  const [dato, setDato] = useState(formularioInicial);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDato((prevDato) => ({
      ...prevDato,
      [name]: value,
    }));
  };

  const enviarConsulta = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje("");

    try {
      const response = await axios.post("http://localhost:3000/api/consultas", dato);
      const { message } = response.data;

      if (message) {
        setMensaje("¡Consulta enviada correctamente!");
        setDato(formularioInicial);
      } else {
        setMensaje("Hubo un problema con tu consulta. Intenta nuevamente.");
      }
    } catch (error) {
      setMensaje("Error al enviar la consulta. Verifica tu conexión o inténtalo más tarde.");
      console.error("Error en el envío:", error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="footer" id="contacto">
      <div className="redesYformulario">
        <div className="contacto-columna">
          <img src={logoContacto} className="logo-contacto" alt="Logo" />
          <div className="redes">
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">LinkedIn</a>
            <a href="">YouTube</a>
          </div>
        </div>
        <div className="columna-formulario">
          {mensaje && (
            <div className="mensaje">
              <p>{mensaje}</p>
              {mensaje.includes("correctamente") && (
              <i className="bi bi-check-circle-fill"></i>
            )}
            </div>
          )}

          {!mensaje.includes("correctamente") && (
            <form className="form-consulta" onSubmit={enviarConsulta}>
              <input type="text" name="nombre" placeholder="Nombre completo" value={dato.nombre} onChange={handleChange} required/>
              <input type="email" name="email" placeholder="Email" value={dato.email} onChange={handleChange} required/>
              <textarea name="consulta" placeholder="Consulta" value={dato.consulta} onChange={handleChange} required></textarea>
              <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Reservar"}
              </button>
            </form>
          )}
        </div>
      </div>
      <hr />
      <div className="copyright">
        <div className="politicas">
          <a href="">Política de privacidad</a>
          <a href="">Nota legal</a>
          <a href="">Condiciones generales</a>
          <a href="">Política de Cookies</a>
        </div>
        <p>©2025 Julian Sanguineti. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Contacto;