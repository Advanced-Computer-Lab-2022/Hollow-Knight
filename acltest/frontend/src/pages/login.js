import { useState } from "react"
import { useLogin } from '../hooks/useLogin'
import { Link, redirect, useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: '8px',
      width: '25ch',
    },
  },
}));

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, loading } = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(email, password)
  }
  const classes = useStyles();
  
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h3>Log In</h3>


      <TextField
        required
        id="username"
        label="Username"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}

      />
<br></br>
      <TextField
        required
        id="password"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}

        variant="outlined"
      />
      <br></br>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
          <br></br>

      <Link to="/forgotpassword">Forgot Password</Link>


      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default Login
