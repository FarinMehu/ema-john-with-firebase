import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="register_form">
                <h4>Create Account</h4>
                <small className='labels'>Your name</small> <br />
                <input type="text" />
                <br />
                <small className='labels'>Mobile or Email</small> <br />
                <input type="email" name="" id="" />
                <br />
                <small className='labels'>Password</small> <br />
                <input type="password" name="" id="" />
                <br />
                <small>Password must be at least 6 characters</small> <br />
                <small className='labels'>Re-enter password</small> <br />
                <input type="password" name="" id="" />
                <br />
                <br />
                <button className='btn-regular'>Continue</button>
                <br />
                <div>------Or------</div>
                <br />
                <button className='btn-regular'>Google Sign-In</button>
            </div>
        </div>
    );
};

export default Register;