import React from 'react';
import { useDispatch } from 'react-redux';

const Login = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch({ type: 'LOGIN' });
        setIsLoggedIn(true);
    };

    return (
        <button 
            onClick={handleLogin} 
            className="bg-green-500 text-white p-2 rounded"
        >
            Login
        </button>
    );
};

export default Login;