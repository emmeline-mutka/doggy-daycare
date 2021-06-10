import './infoDog.css';
import { HashRouter as Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const InfoDog = () => {

    const [foundDog, setFoundDog] = useState([]);

    let location = useLocation();

    let chipNumber = location.pathname.slice(9);

    console.log('url: ', chipNumber);

    useEffect(() => {
        let url = `https://api.jsonbin.io/b/6087ced8f6655022c46cff44/1`;
    
        fetch(url)
        .then(data => data.json()) 
        .then(data => setFoundDog(data.find(specificDog => specificDog.chipNumber === chipNumber)))
  }, []);

    console.log('Found the dog', foundDog);

    let getGender = () => {
        if (foundDog.sex === 'female') {
            return (
                <p className="dog-column">Hona</p>
            )
        } else if (foundDog.sex === 'male') {
            return (
                <p className="dog-column">Hane</p>
            )
        }
    }
    return (
        <div className="info-content">
            {foundDog.owner ?
                <div className="dog-container">
                    <div className="dog-image">
                        <img src={foundDog.img} alt="dog" />
                    </div>
                    <div className="dog-row">    
                        <p className="dog-row1">{foundDog.name}</p> 
                        <p className="dog-row2">{foundDog.chipNumber}</p>
                    </div>
                    <div className="dog-column">
                        <p className="dog-breed">{foundDog.breed}</p>
                        {getGender()}
                        <p className="dog-column">{foundDog.age} år</p>
                    </div>
                    <div className="owner-info">
                        <p>Ägare: {foundDog.owner.name} {foundDog.owner.lastName}</p>
                        <p>Telefonnummer: {foundDog.owner.phoneNumber}</p>
                    </div>
                </div>
            :
            <div className="dog-container">
                <p>Hämtar information...</p>
            </div>
            }  
            <div className="back-btn">
                <Link to="/dogslist">
                    <button><i className="arrow left"></i>
                    Tillbaka</button></Link>
            </div>
        </div>
    )
}

export default InfoDog;