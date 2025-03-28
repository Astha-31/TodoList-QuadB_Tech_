import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const weather = useSelector(state => state.tasks.weather);
    const error = useSelector(state => state.tasks.error);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!weather) {
        return null; 
    }

    return (
        <div className="mt-4">
            <h2 className="font-bold">Current Weather</h2>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main.temp} °F</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;