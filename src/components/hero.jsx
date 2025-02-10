import videoFondo from '../assets/video-fondo.mp4';

const hero = () => {
  return (
    <>
      <div className="hero-container">
        <video src={videoFondo} autoPlay loop muted playsInline type='video/mp4' className="hero-video"/>
        <h1 className="hero-title">Paradisus</h1>
        <p className='subtitulo'>Un santuario de paz entre el mar y la selva</p>
      </div>
    </>
  );
};

export default hero;