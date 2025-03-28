import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../assets/redux/actions/taskActions';
import ActivityCheckbox from './ActivityCheckbox';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('low');
    const [isOutdoor, setIsOutdoor] = useState(false);
    const [location, setLocation] = useState(''); 
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task) {
            dispatch(addTask({ id: Date.now(), text: task, priority, isOutdoor, location }));
            setTask('');
            setPriority('low');
            setIsOutdoor(false);
            setLocation(''); 
        }
    };

    return (
        <div className="mb-4">
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter task" 
                className="border p-2 rounded w-full"
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)} 
                className="border p-2 rounded mt-2 w-full"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <ActivityCheckbox isOutdoor={isOutdoor} setIsOutdoor={setIsOutdoor} />
            {isOutdoor && (
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Enter location for weather" 
                    className="border p-2 rounded mt-2 w-full"
                />
            )}
            <button 
                onClick={handleAddTask} 
                className="bg-blue-500 text-white p-2 rounded mt-2"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;