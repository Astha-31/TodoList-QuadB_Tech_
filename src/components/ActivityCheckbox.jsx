import React from 'react';

const ActivityCheckbox = ({ isOutdoor, setIsOutdoor }) => {
    return (
        <div className="flex items-center mb-4">
            <label className="mr-2">
                <input 
                    type="checkbox" 
                    checked={isOutdoor} 
                    onChange={() => setIsOutdoor(!isOutdoor)} 
                    className="mr-1"
                />
                Outdoor Activity
            </label>

            
        </div>
    );
};

export default ActivityCheckbox;