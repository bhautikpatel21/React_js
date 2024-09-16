import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className='w-full h-lvh bg-black flex justify-center pt-36'>
    <div className="square  bg-black">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className="login ">
        <h2>Login</h2>
        <div className="inputBx">
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Log in" />
        </div>
        <div className="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
