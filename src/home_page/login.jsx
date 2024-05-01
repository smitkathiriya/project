import React, { useState } from 'react';
import "./login.css";


const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(prevState => !prevState);
  };

  return (
    <div className="container" id="container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        {isSignUp ? (
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fab fa-github"></i></a>
              <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        ) : (
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fab fa-github"></i></a>
              <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        )}
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel ${isSignUp ? 'toggle-right' : 'toggle-left'}`}>
            {isSignUp ? (
              <>
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all site features</p>
                <button onClick={toggleForm} className="hidden">Sign Up</button>
              </>
            ) : (
              <>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button onClick={toggleForm} className="hidden">Sign In</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
