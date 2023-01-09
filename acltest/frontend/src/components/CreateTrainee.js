import { useState } from "react";
import React, {  useMemo } from "react";
import { useSignup } from "../hooks/useSignup";
import Select from "react-select";
import countryList from "react-select-country-list";
import Typography from '@mui/material/Typography';

const CreateTrainee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
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
  const maketrainee = async (e) => {
    e.preventDefault();
    const type="corporate trainee"
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

/*
    const trainee = { email, password, country ,countryAbb};

    const response = await fetch("/api/trainees", {
      method: "POST",
      body: JSON.stringify(trainee),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const man = await response.json();
    if (response.ok) {
      setCountry("");
      setPassword("");
      setEmail("");
      console.log("trainee added", man);
    }
    */
  };

  return (
    <form className="createtrainee" onSubmit={maketrainee}>
      <h2> Add trainee</h2>

      <label>email:</label>
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

      <button>Add Trainee</button>
      {error && <div className="error">{error}</div>}
    </form>

    
  );
};

export default CreateTrainee;
