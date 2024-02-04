import React from 'react';
import './CSS/LoginSignup.css';

function LoginSignup() {
  return (
    <div className='login-signup'>
      <form className='login-container'>
        <h1>Sign-in Form</h1>
        <div className="username">
          <label htmlFor="">Username</label>
          <input type="text" placeholder='John' />
        </div>
        <div className="email">
          <label htmlFor="">Email</label>
          <input type="email" placeholder='john@mail.com' />
        </div>
        <div className="password">
          <label htmlFor="">Password</label>
          <input type="password" placeholder='123********' />
        </div>
        <input type="button" value="Continue" />
        <p className='login-part'>Already have an account</p>
        <div className="login-agree">
          <input type="checkbox" name="#check" id="check" />
          <p id='check'> By Continuing, I agree to the terms of use & privacy.</p>
        </div>
      </form>
    </div>
  )
}

export default LoginSignup