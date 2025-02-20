import { useState, useEffect } from 'react';
import gimnasio from '../assets/gimnasio.jpg';
import zenspa from '../assets/zenspa.jpg';
import restaurante from '../assets/restaurante.jpg';
import delfines from '../assets/delfines.jpg';
import quetzal from '../assets/quetzal.jpg';

const ActividadesYServicios = () => {
    const [tarjetaAbierta, setTarjetaAbierta] = useState(null);

    const clickVerTarjeta = (index) => {
        setTarjetaAbierta(tarjetaAbierta === index ? null : index);
    };

    /// eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const ClickAfuera = (event) => {
            if (!event.target.closest(".tarjetas-expandibles")) {
                setTarjetaAbierta(null);
            }
        };
        document.addEventListener("click", ClickAfuera);
        return () => {
            document.removeEventListener("click", ClickAfuera);
        };
    },[]);

    const slides = [
        {
            imagen: gimnasio,
            titulo: "Fitness", 
            descripcion: "Mantén tu rutina de ejercicio en nuestro gimnasio de lujo, equipado con tecnología moderna y todo lo necesario para tu entrenamiento. Contamos con entrenadores personales que te guiarán para alcanzar tus metas fitness, ya sea que busques fortalecer, tonificar o simplemente mantenerte activo durante tu estancia."
        },

        {
            imagen: zenspa,
            titulo: "SPA zen y bienestar",
            descripcion: "Sumérgete en un oasis de tranquilidad en nuestro spa zen. Disfruta de masajes relajantes, sesiones en sauna, tratamientos de hidroterapia y circuitos de agua que revitalizan cuerpo y mente. Ofrecemos servicios rejuvenecedores como faciales, manicuras y peluquería, además de clases de yoga y meditación en la playa o en nuestro espacio dedicado al bienestar."
        },

        {
            imagen: restaurante,
            titulo: "Gastronomía",
            descripcion: "Descubre el sabor de cada platillo de diferentes culturas y disfruta de una experiencia única con una auténtica parrilla argentina en la playa."
        },

        {
            imagen: delfines,
            titulo: "Actividades acuáticas",
            descripcion: "Disfruta de una amplia variedad de experiencias en el mar, desde el snorkel y buceo en arrecifes de coral hasta el emocionante nado con delfines y tiburones nodriza. Para los amantes de la adrenalina, el parasailing te llevará a nuevas alturas con vistas espectaculares del océano."
        },

        {
            imagen: quetzal,
            titulo: "Excursiones exóticas",
            descripcion: "Explora la naturaleza con recorridos en 4x4 o buggies por parques nacionales y cuevas, observa la vida silvestre en reservas naturales o sumérgete en la historia con visitas a ruinas y sitios culturales."
        }
    ];

    return (
        <div className='seccion3' id='actividadesYservicios'>
            <h2 className='titulo-actividades'>Actividades & Servicios</h2>
            <div className="tarjetas-expandibles">
                {slides.map((slide, index) => (
                    <div key={index} className={`tarjeta-expandible ${tarjetaAbierta === index ? "active" : ""}`} onClick={() => clickVerTarjeta(index)}>
                        <img src={slide.imagen} alt={slide.titulo} />
                        <div className="caja-texto">
                            <h3>{slide.titulo}</h3>
                            {tarjetaAbierta === index && <p>{slide.descripcion}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActividadesYServicios;