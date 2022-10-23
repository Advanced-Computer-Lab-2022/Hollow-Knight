

const { useState } = require("react")

const SelectCountryForm = () =>{
    const [country,SetCountry] = useState('')
    const [name,SetName] = useState('')


    const handleSelectCountry = async (e) => {
        e.preventDefault()
        const userInfo = {name,country}

        const res = await fetch('/api/instructors', {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"},    
                body:JSON.stringify(userInfo)
            })
            console.log(res.status)
            if(res.ok){console.log(res.status); 
            return res.json()}
                 
             }  
    return (
        <form className="selectCountryForm" onSubmit={handleSelectCountry} >
            <h2> Select A Country:</h2>
            <label>Name:</label>
            <input
            type="text"
            onChange={(e) => SetName(e.target.value)}
            value={name}
            />
            <br></br>
            <label>Country:</label>
            <input
            type="text"
            onChange={(e) => SetCountry(e.target.value)}
            value={country}
            />
            <br></br>
            <button>Update</button>
        </form>
    )

 
}
export default SelectCountryForm