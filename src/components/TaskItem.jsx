import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../assets/redux/actions/taskActions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div>
                <span className="font-bold">{task.text}</span>
                {task.isOutdoor && task.weather && (
                    <div className="text-sm text-gray-500">
                        <p>Location: {task.weather.name}</p>
                        <p>Temperature: {task.weather.main.temp} °F</p>
                        <p>Condition: {task.weather.weather[0].description}</p>
                    </div>
                )}
            </div>
            <button 
                onClick={() => dispatch(deleteTask(task.id))} 
                className="text-red-500"
            >
                Delete
            </button>
        </div>
    );
};

export default TaskItem;