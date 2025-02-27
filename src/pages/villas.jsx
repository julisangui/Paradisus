import Header from "../components/header.jsx";
import villa1 from "../assets/villa1.jpg";
import villa2 from "../assets/villa2.jpg";
import villa3 from "../assets/imagen-habitaciones.png";
import { useNavigate } from "react-router-dom";

const villas = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return(
        <>
            <Header />
            <div className="villas">

                <div className="tarjeta-villa">
                    <div className="informacion-villa">
                        <h3>Villa Tortuga</h3>
                        <hr />
                        <ul>
                            <div>
                                <li>Living</li>
                                <li>Cocina con chef privado</li>
                                <li>Dormitorios cómodos</li>
                                <li>Baño con jacuzzi</li>
                                <li>Sala de Gym privado</li>
                            </div>
                            <div>
                                <li>Wifi de alta velocidad</li>
                                <li>Servicio de limpieza diaria</li>
                                <li>Aire acondicionado y caja fuerte</li>
                                <li>Terraza con piscina privada</li>
                                <li>Acceso a la playa</li>
                            </div>
                        </ul>
                        <button className="boton-reservar" onClick={() => navigate("/formulario")}>reservar</button>
                    </div>
                    <div id="carouselVillaTortuga" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselVillaTortuga" data-bs-slide-to="0" className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselVillaTortuga" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselVillaTortuga" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={villa1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa3} alt="Third slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselVillaTortuga" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselVillaTortuga" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div className="tarjeta-villa">
                    <div className="informacion-villa">
                        <h3>Villa Delfin</h3>
                        <hr />
                        <ul>
                            <div>
                                <li>Living</li>
                                <li>Cocina con chef privado</li>
                                <li>Dormitorios cómodos</li>
                                <li>Baño con jacuzzi</li>
                                <li>Sala de Gym privado</li>
                            </div>
                            <div>
                                <li>Wifi de alta velocidad</li>
                                <li>Servicio de limpieza diaria</li>
                                <li>Aire acondicionado y Caja fuerte</li>
                                <li>Terraza con piscina privada</li>
                                <li>Acceso a la playa</li>
                            </div>
                        </ul>
                        <button className="boton-reservar" onClick={() => navigate("/formulario")}>reservar</button>
                    </div>
                    <div id="carouselVillaDelfin" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselVillaDelfin" data-bs-slide-to="0" className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselVillaDelfin" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselVillaDelfin" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={villa1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa3} alt="Third slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselVillaDelfin" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselVillaDelfin" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div className="tarjeta-villa">
                    <div className="informacion-villa">
                        <h3>Villa Flamengo</h3>
                        <hr />
                        <ul>
                            <div>
                                <li>Living</li>
                                <li>Cocina con chef privado</li>
                                <li>Dormitorios cómodos</li>
                                <li>Baño con jacuzzi</li>
                                <li>Sala de Gym privado</li>
                            </div>
                            <div>
                                <li>Wifi de alta velocidad</li>
                                <li>Servicio de limpieza diaria</li>
                                <li>Aire acondicionado y Caja fuerte</li>
                                <li>Terraza con piscina privada</li>
                                <li>Acceso a la playa</li>
                            </div>
                        </ul>
                        <button className="boton-reservar" onClick={() => navigate("/formulario")}>reservar</button>
                    </div>
                    <div id="carouselVillaFlamengo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselVillaFlamengo" data-bs-slide-to="0" className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselVillaFlamengo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselVillaFlamengo" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={villa1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa3} alt="Third slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselVillaFlamengo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselVillaFlamengo" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div className="tarjeta-villa">
                    <div className="informacion-villa">
                        <h3>Villa Perla</h3>
                        <hr />
                        <ul>
                            <div>
                                <li>Living</li>
                                <li>Cocina con chef privado</li>
                                <li>Dormitorios cómodos</li>
                                <li>Baño con jacuzzi</li>
                                <li>Sala de Gym privado</li>
                            </div>
                            <div>
                                <li>Wifi de alta velocidad</li>
                                <li>Servicio de limpieza diaria</li>
                                <li>Aire acondicionado y Caja fuerte</li>
                                <li>Terraza con piscina privada</li>
                                <li>Acceso a la playa</li>
                            </div>
                        </ul>
                        <button className="boton-reservar" onClick={() => navigate("/formulario")}>reservar</button>
                    </div>
                    <div id="carouselVillaPerla" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselVillaPerla" data-bs-slide-to="0" className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselVillaPerla" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselVillaPerla" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={villa1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={villa3} alt="Third slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselVillaPerla" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselVillaPerla" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default villas