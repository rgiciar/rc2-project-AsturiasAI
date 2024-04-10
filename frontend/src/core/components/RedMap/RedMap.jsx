import './RedMap.css';

import mapaAsturias from "../../assets/images/mapa_asturias.png";
import icon_eventbrite from "../../assets/images/redes_icon/icon_eventbrite.svg";
import icon_facebook from "../../assets/images/redes_icon/icon_facebook.svg";
import icon_github from "../../assets/images/redes_icon/icon_github.svg";
import icon_linkedin from "../../assets/images/redes_icon/icon_linkedin.svg";
import icon_spotify from "../../assets/images/redes_icon/icon_spotify.svg";
import icon_twitch from "../../assets/images/redes_icon/icon_twitch.svg";
import icon_x from "../../assets/images/redes_icon/icon_x.svg";
import icon_youtube from "../../assets/images/redes_icon/icon_youtube.svg";



export const RedMap = () => {
  return (
    <>
        <div className="redMap">
            <img src={mapaAsturias} alt="" />
        </div>
        <div>
            <button className="redIcon"> <img src={icon_eventbrite} id="eventbrite" alt="icono evenbrite" /> </button>
            <button className="redIcon"> <img src={icon_facebook} id="facebook" alt="icono facebook" /> </button>
            <button className="redIcon"> <img src={icon_github} id="github" alt="icono github" /> </button>
            <button className="redIcon"> <img src={icon_linkedin} id="linkedin" alt="icono linkedin" /> </button>
            <button className="redIcon"> <img src={icon_spotify} id="spotify" alt="icono spotify" /> </button>
            <button className="redIcon"> <img src={icon_twitch} id="twitch" alt="icono twitch" /> </button>
            <button className="redIcon"> <img src={icon_x} id="xTwitter" alt="icono x" /> </button>
            <button className="redIcon"> <img src={icon_youtube} id="youtube" alt="icono youtube" /> </button>
        </div>
    </>
  )
}
