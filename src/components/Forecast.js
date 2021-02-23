import '../App.css';
import React, { useState } from 'react';
import Conditions from "./Conditions";

const Forecast = () => {

    let [responseObj,setResponseObj] = useState({});
    let [city,setCity]= useState('');
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e){
        e.preventDefault();

        if(city.length===0){
            return setError(true);
        }

        setError(false);
        setLoading(true);

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=4c496af33d732297c30b641b3b235e47&units=${unit}`
            ).then(response => response.json())
.then(response => {
    if(response.cod!==200){
        throw new Error()
    }
    setResponseObj(response)
    
    
}).catch(err=>{
    setError(true);
    setLoading(false);
})
    }
    return (
        <div>
            <h2>Current Weather Conditions</h2>
                        <form onSubmit={getForecast}>
                <input type="text" placeholder="Enter City" maxLength="50" value={city}
                className="TextInput"
                onChange={(e)=>setCity(e.target.value)}/>
                <label>
                    <input type="radio" name="units" checked={unit==="imperial"}
                    value="imperial" className="Radio"
                    onChange={(e)=>setUnit(e.target.value)}/>
                    Fahrenheit
                </label>
                <label>
                    <input type="radio" name="units" checked={unit==="metric"}
                    value="metric" className="Radio"
                    onChange={(e)=>setUnit(e.target.value)}/>
                    Celsius
                </label>
                <button type="submit" className="Button">Get Forecast</button>
            </form>
            <Conditions responseObj={responseObj}
            error={error}
            loading={loading} />
        </div>
    );
};

export default Forecast;