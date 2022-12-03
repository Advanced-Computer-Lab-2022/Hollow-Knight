
import {useState} from 'react';


const SelectCountryForm = () =>{
    const [country,setCountry] = useState('')
    const [name,setName] = useState('')
    const handleSelectCountry = async (e) => {
        e.preventDefault()
        const userInfo = {name,country}
        const res = await fetch('/users', {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"},    
                body:JSON.stringify(userInfo)
            })
            console.log(res.status)
            if(res.ok){return res.json()}
                 
             }
    return (
        <form className="selectCountryForm" onSubmit={handleSelectCountry} >
            <h2> Select A Country:</h2>
            <br></br>
            <label>Name:</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <br></br>
            <label>Country:</label>
            <select onChange={(e) =>{
                    setCountry(e.target.value)
                }}>
                    <option>Egypt</option>
                    <option>United States</option>
                    <option>Syria</option>
            </select>
            <br></br>
            <button>Update</button>
        </form>
    )

 
}
export default SelectCountryForm