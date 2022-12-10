import { useState } from "react"
import React, {  useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
const CreateAdmin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [countryAbb, setCountryAbb] = useState("");
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
    setCountry(value.label);
    setCountryAbb(value.value);
  };
    const makeadmin = async (e) => {
        e.preventDefault()

        const admin = {username, password,country,countryAbb}

        const response = await fetch('/api/admins', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        setUsername('')
        setPassword('')
        setCountry('')
        console.log('admin added', man)

        }

    }

    return (
        <form className="createadmin" onSubmit={makeadmin} >
            <h2> Add admin</h2>

            <label>Name:</label>
            <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />

            <label>password:</label>
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

            <button>Add admin</button>
        </form>
    )

}

export default CreateAdmin