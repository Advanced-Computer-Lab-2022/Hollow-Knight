import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
const SelectCountryForm = () => {
  const [country, setCountry] = useState("");
  const [countryAbb, setCountryAbb] = useState("");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
    setCountry(value.label);
    setCountryAbb(value.value);
  };
  const handleSelectCountry = async (e) => {
    e.preventDefault();
    console.log(countryAbb);
    const userInfo = { name, country, countryAbb };
    const res = await fetch("/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    console.log(country);

    if (res.ok) {
      return res.json();
    }
  };
  return (
    <form className="selectCountryForm" onSubmit={handleSelectCountry}>
      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br></br>
      <h4>Please Select A Country:</h4>
      <br></br>
      <Select options={options} value={value} onChange={changeHandler} />
      <button>Update</button>
    </form>
  );
};
export default SelectCountryForm;
