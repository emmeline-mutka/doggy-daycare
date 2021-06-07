import './welcome.css';
import { HashRouter as Route, Link } from "react-router-dom";

const Welcome = (props) => {

    return (
    <div className="welcome-content">
            <p className="welcome-text">Välkommen till <b>Hundkojan</b>!</p>
            <p className="welcome-text">Här tar vi hand om din hund medan du jobbar!</p>
            <section>
            <p className="welcome-text-smaller">Klicka på hundlistan för att se alla inskrivna hundar:</p>
                <Link to="/dogslist">
                    <p data-title="Hundlista" className="welcome-click">Hundlista</p>
                </Link>
            </section>
    </div>
    );
}

export default Welcome;