import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      {/* Background Video */}
      <div id="main-container-video">
        <video autoPlay muted loop>
          <source
            src="https://cdn.pixabay.com/video/2024/02/06/199596-910653729_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Login Box */}
      <div id="main-container-login">
        <h1>Welcome!</h1>
        <h2 id="heading-log">Login</h2>
        <input className="input-box" type="text" placeholder="Username" required />
        <br />
        <input className="input-box" type="password" placeholder="Password" required />
        <br />
        <button id="submit-sign">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
