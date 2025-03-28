import React from 'react';
import { Provider } from 'react-redux';
import store from './assets/redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherDisplay from './components/WeatherDisplay';
import Login from './components/Login';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Provider store={store}>
          <div className=" main container mx-auto p-4 ">
              <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
              {!isLoggedIn ? (
                  <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                  <>
                      <TaskInput />
                      <TaskList />
                      <WeatherDisplay />
                  </>
              )}
          </div>
      </Provider>
  );
};

export default App;