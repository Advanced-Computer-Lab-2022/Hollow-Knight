import React, { useState, useMemo } from "react";
//import Select from "react-select";
import countryList from "react-select-country-list";
import { useSignup } from "../hooks/useSignup";
import Input from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles(() => ({
  
  root: {
    textAlign: 'center', 
       //make background color blue
    backgroundColor: '#ffffff',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '1rem',
  
      width: '25ch',
    },
  },
}));
const Signup = () => {
  const navigate = useNavigate();
  //first_name,last_name,country,countryAbb,gender
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [countryAbb, setCountryAbb] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [gender, setGender] = useState("");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();
  const changeHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    setCountry(event.target.value.label);
    setCountryAbb(event.target.value.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const type ="trainee"
    await signup(
      email,
      password,
      first_name,
      last_name,
      country,
      gender,
      countryAbb,
      type
      
    );
    navigate("/gettype");
  };
  const classes = useStyles();
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
    <Grid item xs={3} sx={{ maxWidth: 1000 }}>
    <Card
    component="form"
    className={classes.root}
    sx={{ width: 500 }}
    >
      <CardContent>
      <h3>Sign up</h3>
      <Input
        label="First Name"
        type="text"
        id="first_name"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
         <br></br>
         <br></br>
      <Input
        label="Last Name"
        type="text"
        id="last_name"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
               <br></br>
<br></br>
      Gender {"  "}
      <Select
        value={gender}
        label="Gender"
        
        
        onChange={(e) => setGender(e.target.value)}
      >
        <MenuItem value={"none"}>Gender Select</MenuItem>
        <MenuItem value={"male"}>Male</MenuItem>

        <MenuItem value={"female"}>Female</MenuItem>
      </Select>
      <br></br>
      <br></br>
      Country {"  "}
      <Select value={value} 
      label="Country"
      onChange={changeHandler}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <br></br>         <br></br>
      <Input
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
             <br></br>         <br></br>
      <Input
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
              <br></br>         <br></br>
      <Button variant="contained" disabled={loading} type="submit" onClick={handleSubmit}>
        Sign up
      </Button>
      {error && <div className="error">{error}</div>}
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
};
export default Signup;
