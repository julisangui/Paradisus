import Villa from '../assets/imagen-villa.png';
import Habitacion from '../assets/imagen-habitaciones.png';
import { useNavigate } from 'react-router-dom';

const habitacionesYvillas = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return (
        <div className='seccion1' id='habitacionesYvillas'>
            <h2>Habitaciones & Villas</h2>
            <p className='presentacion-seccion'>
                Diseñadas para capturar el deslumbrante esplendor natural de la isla, cada suite y villa de Cayo
                Levantado Resort promete una experiencia que va más allá del simple alojamiento.
            </p>
            <div className='tarjeta tarjeta1'>
                <img src={Habitacion}></img>
                <div className='descripcion'>
                    <h3>Habitaciones</h3>
                    <p>
                        Descansa en un oasis de tranquilidad con nuestras habitaciones estándar, diseñadas para tu confort.
                        Con vistas a exuberantes jardines o al mar turquesa, cada espacio combina elegancia tropical con
                        modernas comodidades. Disfruta de una cama acogedora, balcón privado y el sonido relajante de la
                        brisa caribeña.
                    </p>
                    <button onClick={() => navigate("/formulario")}>Reservar<i className="bi bi-chevron-right"></i></button>
                </div>
            </div>

            <div className='tarjeta tarjeta2'>
                <img src={Villa}></img>
                <div className='descripcion'>
                    <h3>Villas</h3>
                    <p>
                        Exclusivas villas diseñadas para reflejar la belleza tropical y los ritmos naturales de este
                        paraíso caribeño. Colores elegantes, paisajes impresionantes y una vida silvestre excepcional,
                        todo combinado con el mayor lujo y comodidad. Su estancia en Cayo Levantado Resort será extraordinaria.
                    </p>
                    <button onClick={() => navigate("/villas")}>Mirar y seleccionar<i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default habitacionesYvillas;