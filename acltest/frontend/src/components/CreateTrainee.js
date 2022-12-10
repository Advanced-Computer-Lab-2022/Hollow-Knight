import { useState } from "react";
import React, {  useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
const CreateTrainee = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [countryAbb, setCountryAbb] = useState("");
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
const changeHandler = (value) => {
  setValue(value);
  setCountry(value.label);
  setCountryAbb(value.value);
};
  const maketrainee = async (e) => {
    e.preventDefault();

    const trainee = { username, password, country ,countryAbb};

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
      setUsername("");
      console.log("trainee added", man);
    }
  };

  return (
    <form className="createtrainee" onSubmit={maketrainee}>
      <h2> Add trainee</h2>

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

      <button>Add Trainee</button>
    </form>
  );
};

export default CreateTrainee;
