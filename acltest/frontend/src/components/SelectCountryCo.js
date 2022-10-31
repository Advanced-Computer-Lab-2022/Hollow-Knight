import { useParams } from "react-router-dom";
import {useState} from 'react';


const SelectCountryForm = () =>{
    const [country,SetCountry] = useState('')
    const param = useParams();
    const handleSelectCountry = async (e) => {
        e.preventDefault()
        const userInfo = {country}
        const res = await fetch('/users/'+param.id, {
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
            <label>Country:</label>
            <select onChange={(e) =>{
                    SetCountry(e.target.value)
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