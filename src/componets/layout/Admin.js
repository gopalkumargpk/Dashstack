import React from 'react';
import '../../App.css';
import '../styles/Admin.css'; 

function Admin() {
  return (
    <div className="container">
      <h1>Login to Account</h1>
      <p>Please enter your email and password to continue</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="esteban_schiller@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember Password</label>
        </div>
        <button type="submit" className="btn">Sign In</button>


      </form>
      <div className="create-account">
        Don't have an account? <a href="#">Create Account</a>
      </div>
    </div>
  );
}

export default Admin;
