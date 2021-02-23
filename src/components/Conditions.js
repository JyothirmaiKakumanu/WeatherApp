import React from 'react';
import '../App.css';

const Conditions = (props) => {
    return (
        <div className="Wrapper">
             {props.error && <small>Please enter a valid city</small>}
    
            {props.responseObj.cod===200?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                    <p>Humidity: {props.responseObj.main.humidity} | Wind Speed: {props.responseObj.wind.speed}</p>
                </div>
                :null
                }
        </div>
        
    );
};

export default Conditions;