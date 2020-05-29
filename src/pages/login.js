import React, { useState } from 'react';
import api from '../utils/api';
import { Redirect } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIslogged] = useState(false);
    const body = {email, password};
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('user/authenticate', body)
        .then(res => {
            setUser(res.data.user);
            setIslogged(true);
        
        }  )


        .catch(error => console.log(error.response.data.message))
        console.log('tu as cliqué');
    }

    console.log(user);
    
    if(isLogged) return <Redirect to='/' />


    return(
       <>
       
       <h1>Login</h1>

            <form onSubmit={handleSubmit} > 

                <label>Email</label>
                <input type="Email" name='email' onChange={(e)=> setEmail(e.target.value)}
                value={email}/>
                
                <label>Mot de pass</label>
                <input type="Password" name='password' onChange={(e) => setPassword(e.target.value)} value={password}/> 

                <button type='submit'>Se connecter</button>
       
            </form>
       
       </>
       
    )
}

export default Login;