import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className="square">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sign in" />
        </div>
        <div className="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from 'react';
// import './LoginPage.css'; // Import the CSS file for styling

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     password: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const validateForm = () => {
//     const { username, password } = formData;
//     const newErrors = {};

//     if (!username) newErrors.username = 'Username is required';
//     if (!password) newErrors.password = 'Password is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Handle form submission (e.g., authenticate user)
//       console.log('Form submitted:', formData);

//       setSubmitted(true);
//       setFormData({
//         username: '',
//         password: ''
//       });
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         {submitted && <p className="success-message">Login successful!</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className={errors.username ? 'error' : ''}
//               placeholder="Username"
//             />
//             {errors.username && <p className="error-message">{errors.username}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={errors.password ? 'error' : ''}
//               placeholder="Password"
//             />
//             {errors.password && <p className="error-message">{errors.password}</p>}
//           </div>

//           <button type="submit">Sign In</button>
//         </form>
//         <div className="links">
//           <a href="#">Forgot Password?</a>
//           <a href="#">Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
