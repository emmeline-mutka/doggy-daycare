import './infoDog.css';
import { HashRouter as Route, Link } from "react-router-dom";

const InfoDog = () => {

    return (

    <div className="info-content">
       <div className="dogs-container">
                <div className="dog-image">
                    <img src="img/siberian-husky.jpg" alt="" />
                </div>
                <div className="dog-row">    
                    <p className="dog-row1">{/*Namn:*/} Blixten</p> 
                    <p className="dog-row2">{/*Chipnr:*/} EMD261122</p>
                </div>
                <div className="dog-column">
                    <p className="dog-column">{/*Kön:*/} Hane</p>
                    <p className="dog-column">{/*Ålder:*/} 3 år</p>
                </div>
                <div className="owner-info">
                    <p>Ägare: Glader Gladsson</p>
                    <p>Telefonnummer: 070 123 45 67</p>
                </div>
            </div>
        <div className="back-btn">
            <Link to="/dogslist">
                <button><i class="arrow left"></i>
                Tillbaka till listan</button></Link>
        </div>
        
    </div>
    
    )
}

export default InfoDog;