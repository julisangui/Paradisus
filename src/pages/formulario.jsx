import { useState } from "react";
import Header from "../components/header.jsx";

const Formulario = () => {
    const [dato, ingresarDato] = useState({
        nombre: "",
        cantidadPersonas: "",
        email: "",
        telefono: "",
        tipo: "",
        ingreso: "",
        salida: "",
        numeroTarjeta: "",
        fechaExpiracion: "",
        codigoVerificacion: "",
        titularTarjeta: ""
    });

    const [formEnviado, setFormEnviado] = useState(false);

    const handleChange = (e) => {
        ingresarDato({ ...dato, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormEnviado(true);
    };

    return (
        <>
            <Header />
            <div className="formulario">
                {formEnviado ? (
                    <div id="mensaje">
                        <p>¡Reserva enviada correctamente!</p>
                        <i className="bi bi-check-circle-fill"></i>
                    </div> ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="fila">
                            <div>
                                <label>Nombre Completo</label>
                                <input type="text" name="nombre" value={dato.nombre} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Cantidad de personas</label>
                                <input type="number" name="cantidadPersonas" value={dato.cantidadPersonas} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="fila">
                            <div>
                                <label>Correo Electrónico</label>
                                <input type="email" name="email" value={dato.email} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <input type="tel" name="telefono" value={dato.telefono} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="formulario-select">
                            <label>Tipo de Alojamiento</label>
                            <select name="tipo" value={dato.tipo} onChange={handleChange} required>
                                <option hidden value=""></option>
                                <option value="habitacion">Habitación</option>
                                <option value="villa">Villa Tortuga</option>
                                <option value="villa">Villa Delfín</option>
                                <option value="villa">Villa Flamengo</option>
                                <option value="villa">Villa Perla</option>
                            </select>
                        </div>
                        <div className="fila">
                            <div>
                                <label>Fecha de ingreso</label>
                                <input type="date" name="ingreso" value={dato.ingreso} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Fecha de salida</label>
                                <input type="date" name="salida" value={dato.salida} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="fila">
                            <div>
                                <label>Titular de la tarjeta</label>
                                <input type="text" name="titularTarjeta" value={dato.titularTarjeta} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Número de la tarjeta</label>
                                <input type="number" name="numeroTarjeta" value={dato.numeroTarjeta} onChange={handleChange} placeholder="Ingrese un número cualquiera" required />
                            </div>
                        </div>
                        <div className="fila">
                            <div>
                                <label>Fecha de expiración</label>
                                <input type="text" name="fechaExpiracion" value={dato.fechaExpiracion} onChange={handleChange} placeholder="mm/aa" required />
                            </div>
                            <div>
                                <label>CVC/CVV</label>
                                <input type="number" name="codigoVerificacion" value={dato.codigoVerificacion} onChange={handleChange} placeholder="Ingrese un número cualquiera" required />
                            </div>
                        </div>
                        <button type="submit">Reservar</button>
                    </form>
                )}
            </div>
        </>
    );
};

export default Formulario;