import './welcome.css';
import { HashRouter as Route, Link } from "react-router-dom";

const Welcome = () => {

    return (
    <div className="welcome-content">
            <p>Välkommen till <b>Hundkojan</b>!</p>
            <p>Här tar vi hand om din hund medan du jobbar!</p>
            <section className="welcome-button">
            <Link to="/dogslist"><button onClick>
                    Klicka här för att se en lista på alla inskrivna hundar
                </button></Link>
            </section>
    </div>
    );
}

export default Welcome;