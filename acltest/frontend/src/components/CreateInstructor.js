import { useState } from "react"
import React, {  useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
const CreateInstructor = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState("");
    const [countryAbb, setCountryAbb] = useState("");
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
    setCountry(value.label);
    setCountryAbb(value.value);
  };
    const makeinstructor = async (e) => {
        e.preventDefault()
        
        const instructor = {email, password,country,countryAbb}
       console.log("here")
        const response = await fetch('/api/instructors', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
            setEmail('')
            setPassword('')
            setCountry('')
        console.log('instructor added', man)
        }

    }

    return (
        <form className="createinstructor" onSubmit={makeinstructor} >
            <h2> Add instructor</h2>

            <label>email :</label>
            <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
           
            <label>password :</label>
            <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
             <br></br>
             <label>Please Select A Country:</label>
      <br></br>
      <Select options={options} value={value} onChange={changeHandler} />
      <br></br>
             

            <button>Add Instructor</button>
        </form>
    )

}

export default CreateInstructor