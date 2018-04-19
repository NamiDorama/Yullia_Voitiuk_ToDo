import './preloader.scss';

export const Preloader = () => (
  <div className="loading">
    <div className="loading__dog">
      <div className="mechones">
        <div className="mechon"></div>
        <div className="mechon"></div>
      </div>
      <div className="cabeza">
        <div className="cabeza__bg">
          <div className="cabeza__mancha"></div>
        </div>
        <div className="cabeza__bg"></div>
        <div className="cabeza__bg"></div>
        <div className="cabeza__ojos">
          <div className="cabeza__ojo">
            <div className="cabeza__retina"></div>
          </div>
          <div className="cabeza__ojo">
            <div className="cabeza__retina"></div>
          </div>
        </div>
        <div className="cabeza__nariz">
          <div className="cabeza__bgnariz"></div>
          <div className="cabeza__bgnariz"></div>
          <div className="cabeza__bgnariz"></div>
          <div className="cabeza__bgnariz"></div>
          <div className="cabeza__bgnariz"></div>
        </div>
      </div>
      <div className="lengua"></div>
      <div className="orejas">
        <div className="oreja">
          <div className="oreja__entrada"></div>
          <div className="oreja__salida"></div>
        </div>
        <div className="oreja">
          <div className="oreja__entrada"></div>
          <div className="oreja__salida"></div>
        </div>
      </div>
      <div className="cuerpo">
        <div className="cuerpo__cuello">
        </div>
        <div className="cuerpo__nuca"></div>
        <div className="cuerpo__espalda"></div>
        <div className="cuerpo__patatrasera"></div>
        <div className="cuerpo__panza"></div>
        <div className="cuerpo__pecho"></div>
        <div className="cuerpo__patita"></div>
        <div className="cuerpo__cola"></div>
      </div>
    </div>
    <p>Loading...</p>
  </div>
);
