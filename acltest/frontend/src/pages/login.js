import { useState } from "react"
import{useLogin} from '../hooks/useLogin'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const Login=()=>{
  const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { user } = useAuthContext();

const {login,error,loading} = useLogin()
const handleSubmit =async (e)=>{
    e.preventDefault()
    const res = await login(email,password)

    


}

    return(
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <form className="login">
        <h3>Log In</h3>
        
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

  
        <Button  variant="contained" disabled={loading} onClick={handleSubmit}>Log in</Button>
        
        <br></br>
        <br></br>
        <Link to="/forgotpassword">Forgot Password</Link>
        

        {error && <div className="error">{error}</div>}
      </form>
      </CardContent>
      </Card>
    )    
}
export default Login
