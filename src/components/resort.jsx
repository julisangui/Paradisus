import calificacion from '../assets/calificacion-Forbes.png'

const resort = () =>{
    return(
        <>
            <div className='presentacion-resort'>
                <h2 className="titulo-resort" id="resort">
                    Una experiencia unica
                    <br />
                    para despejar la mente</h2>
                <p className="descripcion-resort">
                    <span>El complejo</span> se asienta majestuosamente en una encantadora isla dentro de una <span>isla paradisíaca</span>.
                    Tras una breve y relajante travesía en barco, un muelle de inspiración victoriana les da la bienvenida
                    y les invitamos a adentrarse en el frondoso palmeral que se mece al compás de la brisa. Nada más
                    desembarcar, nuestro personal le orientará para conectar con la isla y sus maravillosas
                    posibilidades desde el primer momento.
                    <br />
                    <br />
                    En Paradisus, encontrará una experiencia profunda y auténticamente dominicana: <span>la cultura
                    y el estilo de vida locales, la sostenibilidad y el cuidado de mente, cuerpo y espíritu</span> han inspirado
                    la creación de este nuevo <span>resort de cinco estrellas lujo todo incluido</span>, así como sus servicios y
                    gastronomía del más alto nivel.
                    <br />
                    <br />
                    Paradisus ha recibido la calificación de <span>Cinco Estrellas por Forbes Travel Guide</span>, posicionándose como <span>uno de los mejores hoteles de bienestar del mundo</span>.
                </p>
                <hr className='linea1'/>
                <img src={calificacion} className='calificacion-forbes'></img>
            </div>
        </>
    )
}

export default resort