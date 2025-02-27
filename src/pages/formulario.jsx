import { useState } from "react";
import Header from "../components/header.jsx";

const Formulario = () => {
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reserva enviada", formData);
        alert("¡Reserva enviada con éxito!");
    };

    return (
        <>
            <Header />
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <div className="fila">
                        <div>
                            <label>Nombre Completo</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Cantidad de personas</label>
                            <input type="number" name="ocupacion" value={formData.cantidadPersonas} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="fila">
                        <div>
                            <label>Correo Electrónico</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Teléfono</label>
                            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="formulario-select">
                        <label>Tipo de Alojamiento</label>
                        <select name="tipo" value={formData.tipo} onChange={handleChange} required>
                            <option hidden value=""></option>
                            <option value="habitacion">Habitación</option>
                            <option value="villa">Villa Tortuga</option>
                            <option value="villa">Villa Delfin</option>
                            <option value="villa">Villa Flamengo</option>
                            <option value="villa">Villa Perla</option>
                        </select>
                    </div>
                    <div className="fila">
                        <div>
                            <label>Fecha de ingreso</label>
                            <input type="date" name="ingreso" value={formData.ingreso} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Fecha de salida</label>
                            <input type="date" name="salida" value={formData.salida} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="fila">
                        <div>
                            <label>Titular de la tarjeta</label>
                            <input type="text" name="titularTarjeta" value={formData.titularTarjeta} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Numero de la tarjeta</label>
                            <input type="number" name="numeroTarjeta" value={formData.numeroTarjeta} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="fila">
                        <div>
                            <label>Fecha de expiración</label>
                            <input type="text" name="fechaExpiracion" value={formData.fechaExpiracion} onChange={handleChange} placeholder="mm/aa" required />
                        </div>
                        <div>
                            <label>CVC/CVV</label>
                            <input type="number" name="codigoVerificacion" value={formData.codigoVerificacion} onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit">Reservar</button>
                </form>
            </div>
        </>
    );
};

export default Formulario;