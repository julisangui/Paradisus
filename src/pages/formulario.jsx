import { useState } from "react";
import Header from "../components/header.jsx";
import axios from "axios";

const Formulario = () => {
  const formularioInicial = {
    nombre_cliente: "",
    cantidad_personas: "",
    email: "",
    telefono: "",
    tipo_alojamiento: "",
    fecha_ingreso: "",
    fecha_salida: "",
    numero_tarjeta: "",
    fecha_expiracion: "",
    codigo_verificacion: "",
    titular_tarjeta: "",
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

  const enviarReserva = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje("");

    try {
      const datosAEnviar = {
        ...dato,
        fecha_expiracion: dato.fecha_expiracion + "-01",
      };

      const response = await axios.post("http://localhost:3000/api/reservas", datosAEnviar);
      const { message } = response.data;

      if (message) {
        setMensaje("¡Reserva enviada correctamente!");
        setDato(formularioInicial);
      } else {
        setMensaje("Hubo un problema con tu reserva. Intenta nuevamente.");
      }
    } catch (error) {
      setMensaje("Error al enviar la reserva. Verifica tu conexión o inténtalo más tarde.");
      console.error("Error en el envío:", error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Header />
      <div className="formulario">
        {mensaje && (
          <div className="mensaje">
            <p>{mensaje}</p>
            {mensaje.includes("correctamente") && (
              <i className="bi bi-check-circle-fill"></i>
            )}
          </div>
        )}
        {!mensaje.includes("correctamente") && (
          <form onSubmit={enviarReserva}>
            <div className="fila">
              <div>
                <label htmlFor="nombre_cliente">Nombre completo</label>
                <input type="text" id="nombre_cliente" name="nombre_cliente" value={dato.nombre_cliente} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="cantidad_personas">Cantidad de personas</label>
                <input type="number" id="cantidad_personas" name="cantidad_personas" value={dato.cantidad_personas} onChange={handleChange} required />
              </div>
            </div>

            <div className="fila">
              <div>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" value={dato.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" value={dato.telefono} onChange={handleChange} required />
              </div>
            </div>

            <div className="formulario-select">
              <label htmlFor="tipo_alojamiento">Tipo de alojamiento</label>
              <select id="tipo_alojamiento" name="tipo_alojamiento" value={dato.tipo_alojamiento} onChange={handleChange} required>
                <option hidden value="">Alojamiento (Seleccione una opción)</option>
                <option value="Habitacion">Habitación</option>
                <option value="Villa Tortuga">Villa Tortuga</option>
                <option value="Villa Delfin">Villa Delfín</option>
                <option value="Villa Flamenco">Villa Flamenco</option>
                <option value="Villa Perla">Villa Perla</option>
              </select>
            </div>

            <div className="fila">
              <div>
                <label htmlFor="fecha_ingreso">Fecha de ingreso</label>
                <input type="date" id="fecha_ingreso" name="fecha_ingreso" value={dato.fecha_ingreso} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="fecha_salida">Fecha de salida</label>
                <input type="date" id="fecha_salida" name="fecha_salida" value={dato.fecha_salida} onChange={handleChange} required />
              </div>
            </div>

            <div className="fila">
              <div>
                <label htmlFor="titular_tarjeta">Titular de la tarjeta</label>
                <input type="text" id="titular_tarjeta" name="titular_tarjeta" value={dato.titular_tarjeta} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="numero_tarjeta">Número de la tarjeta</label>
                <input type="text" id="numero_tarjeta" name="numero_tarjeta" value={dato.numero_tarjeta} onChange={handleChange} required />
              </div>
            </div>

            <div className="fila">
              <div>
                <label htmlFor="fecha_expiracion">Fecha de expiración</label>
                <input type="month" id="fecha_expiracion" name="fecha_expiracion" value={dato.fecha_expiracion} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="codigo_verificacion">CVC/CVV</label>
                <input type="number" id="codigo_verificacion" name="codigo_verificacion" value={dato.codigo_verificacion} onChange={handleChange} required maxLength={4} />
              </div>
            </div>

            <button type="submit" disabled={enviando}>
              {enviando ? "Enviando..." : "Reservar"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Formulario;