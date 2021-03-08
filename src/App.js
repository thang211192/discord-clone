import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Chat from './Chat';
import Slidebar from './Slidebar';
import {login, logout, selectUser} from './features/userSlice'
import Login from './Login';
import {auth} from './firebase'


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log('user is: ',authUser);
      if(authUser){
        //the user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }
      else{
        //the user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
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
