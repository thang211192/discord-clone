import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((err)  => alert(err.message))
    }
    return (
        <div className="login">
            <div className='login__logo'>
                <img 
                src="https://www.pngarts.com/files/9/Social-Blue-Discord-Logo-PNG-Pic-Background.png"
                alt=""
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
        
    )
}

export default Login
