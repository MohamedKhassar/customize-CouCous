import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="formlo mimi" onSubmit={handleSubmit}>
      <h3>Log <span>In</span> </h3>
      <br/><br/>
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
       
      />
      <br></br>
     
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
       
      />
    
       <button className="btn" disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
<br></br><br/>
      <p>I don't have an account <Link to="/signup"><b>Sign Up</b></Link></p>
      </form>
  )
}

export default Login