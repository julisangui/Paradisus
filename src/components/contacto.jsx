import logoContacto from '../assets/Logo.png'

const contacto = () => {
    return(
        <>
            <div className='footer' id='contacto'>
                <div className="redesYformulario">
                    <div className='contacto-columna'>
                        <img src={logoContacto} className='logo-contacto'></img>
                        <div className='redes'>
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">Instagram</a>
                            <a href="">LinkedIn</a>
                            <a href="">YouTube</a>
                        </div>
                    </div>
                    <form className='formulario-contacto'>
                        <input type="text" placeholder="Nombre completo"></input>
                        <input type="email" placeholder="Email"></input>
                        <input type="tel" placeholder="Telefono"></input>
                        <textarea placeholder="Asunto"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <hr />
                <div className='copyright'>
                    <div className='politicas'>
                        <a href="">Política de privacidad</a>
                        <a href="">Nota legal</a>
                        <a href="">Condiciones generales</a>
                        <a href="">Política de Cookies</a>
                    </div>
                    <p>©2025 Julian Sanguineti. Todos los derechos reservados.</p>
                </div>
            </div>
        </>
    )
}

export default contacto;