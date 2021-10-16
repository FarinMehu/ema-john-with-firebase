import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    // console.log('came from ', location.state?.from);
    // const { signInWithGoogle } = useFirebase();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login_form'>
            <div className='login_steps'>
                <h2>Sign-In</h2>
                <form onSubmit="">
                    <small>Email or phone number</small><br />
                    <input type="email" name="" id="" />
                    <br />
                    <small>Password</small> <br />
                    <input type="password" name="" id="" />
                </form>
                <div>---New to ema-john?---</div> <br />
                <button className='btn-regular'> <Link to='/register'>Create account</Link> </button>
                <br /> <br />
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;