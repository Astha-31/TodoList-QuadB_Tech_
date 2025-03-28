import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_ERROR = 'SET_ERROR';
export const SET_TASKS = 'SET_TASKS'

export const addTask = (task) => {
    return async (dispatch) => {

        let weatherData = null;
        if (task.isOutdoor && task.location) {
            try {
                weatherData = await fetchWeather(task.location);
            } catch (error) {
                dispatch({ type: SET_ERROR, payload: error.message });
            }
        }

        
        dispatch({
            type: ADD_TASK,
            payload: { ...task, weather: weatherData },
        });
    };
};

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});


export const fetchWeather = async (location) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b3943db4d5fde77bfb8916305944c273&units=imperial`);
        return response.data; 
    } catch (error) {
        throw new Error(error.message); 
    }
};