import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"; // Ensure you have this CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Used to redirect to another page

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication
    if (email === "srktech12@gmail.com" && password === "srktech123") {
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Enter Email or Username" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
