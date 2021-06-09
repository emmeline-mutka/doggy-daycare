import './dogsList.css';
import { HashRouter as Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const DogsList = (props) => {

    console.log('Här är vi!', props.getDogs);

    const [listOfDogs, setListOfDogs] = useState([]);

    useEffect(() => {
        setListOfDogs(props.getDogs);
    }, []);

    let dataList = listOfDogs.map((dog, key) => {
        return (
            <div className="dogs-container" key={key}>
                <div className="dogs-image">
                    <Link to={"infodog/" + dog.chipNumber}><img src={dog.img} alt="dog" /></Link>
                </div>
                <div className="dogs-row">
                    <p className="dogs-name">{dog.name}</p>
                    {dog.present ?
                        <span className="check-green">&#10004;</span>
                        :
                        <span className="check-red">&#10006;</span>}
                </div>
            </div>
        )
    })

    return (
        <div className="dogs-content">
            <div className="dogs-wrapper">
                {dataList}
            </div>
        </div>
    )
}

export default DogsList;
