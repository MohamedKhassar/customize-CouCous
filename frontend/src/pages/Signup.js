import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const pattern = /^[A-Z]$/;
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name,email, password);
  };

  return (
    <div>
    <form className="formlo mimi" onSubmit={handleSubmit}>
      <h3>Sign <span>Up</span></h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button className="btn" disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      <br/><br/>
      <ul>
        <li style={{ listStyleType:"none" }}>{pattern.test(password[0]) ? `✅` : "❌"} Use a capital letters.</li>
        <li style={{ listStyleType:"none" }}>{password.match(/\d/) ? `✅` : "❌"} Include numbers (e.g., 0-9).</li>
        <li style={{ listStyleType:"none" }}>{password.match(/[@&$]/) ? `✅` : "❌"} Include special characters (e.g., @, &, $, etc.).</li>
        <li style={{ listStyleType:"none" }}>{password.length >= 8 ? `✅` : "❌"} Ensure the password is at least 8 characters long.
        </li>
      </ul>
    </form><br/><br/>
    </div>
    
  );
};

export default Signup;
