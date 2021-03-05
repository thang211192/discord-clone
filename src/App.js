import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Chat from './Chat';
import Slidebar from './Slidebar';
import {selectUser} from './features/userSlice'
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Slidebar/>
          <Chat/>
        </>
      ) : (
         <Login/>
      )}
      
    </div>
  );
}

export default App;
