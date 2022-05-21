import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'


function Login({handleLogin}){

    const navigate = useNavigate();

    const signupButton = (
        <>
         <button onClick={() => navigate('/signup')}>Don't have an account? Sign up</button>
        </>
    )
        return (
            <>
            <LoginForm handleLogin={handleLogin}/>
            {signupButton}
            </>
        )
}


export default Login;