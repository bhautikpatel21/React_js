import React from 'react'

const Login = () => {
  return (
   <>
   
   <div class="glowing-light"></div>
    <div class="login-box">
        <form action="#">
            <input type="checkbox" class="input-check" id="input-check"/>
            <label for="input-check" class="toggle">
                <span class="text off">off</span>
                <span class="text on">on</span>
            </label>
            <div class="light"></div>

            <h2>Login</h2>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required/>
                <label>User Name</label>
                <div class="input-line"></div>
            </div>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required/>
                <label>Email</label>
                <div class="input-line"></div>
            </div>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required/>
                <label>Password</label>
                <div class="input-line"></div>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"/> Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className='text-white'>Login</button>
            <div class="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>

   </>
  )
}

export default Login
