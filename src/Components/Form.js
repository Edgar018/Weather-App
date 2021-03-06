import React from 'react';
import './styles/Form.css';

const  Form = props  => {
    return (
        <div className="card">
            <h1>
                Weather App
            </h1>
            <form onSubmit={props.getWeather}>
                <div className="group">
                    <input className="input"
                        required 
                        type="text"
                        name="country"
                    />
                    <label>Country</label>
                </div>
                    <div className="group">
                        <input className="input"
                            required 
                            type="text" 
                            name="city"
                        />
                        <label>City</label>
                    </div>
                <div>
                    <button type="submit" className="btn">
                        <span>
                            Send
                        </span>
                    </button>
                </div>
           </form>
        </div>
    )
}

export default Form;