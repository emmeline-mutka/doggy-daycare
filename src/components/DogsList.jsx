import './dogsList.css'; 
import { HashRouter as Route, Link } from "react-router-dom";

const DogsList = () => {

    return (
    <div className="dogs-content">
        <div className="dogs-wrapper">
            <div className="dogs-container">
                <div className="dogs-image">
                    <Link to="infodog"><img src="img/siberian-husky.jpg" alt="" /></Link>
                </div>
                <div className="dogs-row">    
                    <p className="dogs-name">{/*Namn:*/} Blixten</p>
                    <span className="check-green">&#10004;</span> 
                </div>
            </div>
        
            <div className="dogs-container">
                <div className="dogs-image">
                    <img src="img/siberian-husky.jpg" alt="" />
                </div>
                <div className="dogs-row">    
                    <p className="dogs-name">{/*Namn:*/} Blixten</p>
                    <span className="check-red">&#10006;</span>  
                </div>
            </div>

            <div className="dogs-container">
                <div className="dogs-image">
                    <img src="img/siberian-husky.jpg" alt="" />
                </div>
                <div className="dogs-row">    
                    <p className="dogs-name">{/*Namn:*/} Blixten</p> 
                </div>
            </div>

            <div className="dogs-container">
                <div className="dogs-image">
                    <img src="img/siberian-husky.jpg" alt="" />
                </div>
                <div className="dogs-row">    
                    <p className="dogs-name">{/*Namn:*/} Blixten</p> 
                </div>
            </div>

            <div className="dogs-container">
                <div className="dogs-image">
                    <img src="img/siberian-husky.jpg" alt="" />
                </div>
                <div className="dogs-row">    
                    <p className="dogs-name">{/*Namn:*/} Blixten</p> 
                </div>
            </div>

            <div className="dogs-container">
                <div className="dogs-image">
                    <img src="img/siberian-husky.jpg" alt="" />
                </div>
                <div className="dogs-row">    
                    <p className="dogs-name">{/*Namn:*/} Blixten</p> 
                </div>
            </div>
        </div>

    </div>
    )
}
    
export default DogsList;
