import './RedMap.css';

import mapaAsturias from "../../assets/images/redmap_1.png";
import icon_spotify from "../../assets/images/redes_icon/icon_spotify.svg";
import icon_x from "../../assets/images/redes_icon/icon_x.svg";
import icon_youtube from "../../assets/images/redes_icon/icon_youtube.svg";


export const RedMap = () => {
  return (
    <section className="sectionMap">
        <img className="redMap" src={mapaAsturias} alt="" />
        <div>
            <a href="https://open.spotify.com/show/7jlvqZbovyt7Gd4WTEGfv4" target="_blank" rel="noopener noreferrer" className="redIcon"> 
                <img src={icon_spotify} id="spotify" alt="icono spotify" /> 
            </a>
            <a href="https://twitter.com/Asturias_AI" target="_blank" rel="noopener noreferrer" className="redIcon"> 
                <img src={icon_x} id="xTwitter" alt="icono x" /> 
            </a>
            <a href="https://www.youtube.com/spainai" target="_blank" rel="noopener noreferrer" className="redIcon"> 
                <img src={icon_youtube} id="youtube" alt="icono youtube" /> 
            </a>
        </div>
    </section>
  )
}
