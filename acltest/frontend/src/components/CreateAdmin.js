import { useState } from "react"
import { useSignup } from "../hooks/useSignup";
import React, {  useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Typography from '@mui/material/Typography';

const CreateAdmin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [countryAbb, setCountryAbb] = useState("");
    const [value, setValue] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { signup, error, loading } = useSignup();
    const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
    setCountry(value.label);
    setCountryAbb(value.value);
  };
    const makeadmin = async (e) => {
        e.preventDefault()
   const type="admin"
   const first_name=""
   const last_name=""
   const gender=""
   setEmailError(false)
    if(!email){
      setEmailError(true)
      return
    }
    setPasswordError(false)
    if(!password){
      setPasswordError(true)
      return
    }

   await signup(
    email,
    password,    
    first_name,
    last_name, 
    country,
    countryAbb,
    gender,
    type
    
 
   
  );
       // const admin = {email, password,country,countryAbb,type}
/*
        const response = await fetch('/api/admins', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        setEmail('')
        setPassword('')
        setCountry('')
        console.log('admin added', man)

        }
*/
    }

    return (
        <form className="createadmin" onSubmit={makeadmin} >
            <h2> Add admin</h2>

            <label>Email:</label>
            <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

{emailError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Enter An Email
</Typography>

}

            <label>password:</label>
            <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

{passwordError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Enter a password
</Typography>

}
             <br></br>
             <label>Please Select A Country:</label>
      <br></br>
      <Select options={options} value={value} onChange={changeHandler} />
      <br></br>

            <button>Add admin</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default CreateAdmin