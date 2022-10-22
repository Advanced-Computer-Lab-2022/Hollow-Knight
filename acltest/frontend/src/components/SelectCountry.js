const { useState } = require("react")

const SelectCountryForm = () =>{
    const [country,SetCountry] = useState('')
    const [id,SetID] = useState('')


    const handleSelectCountry = async (e) => {
        e.preventDefault()
        
        const userInfo = {id,country}

        const response = await fetch('/api/selectcourse',{
            method: 'PATCH',
            body: JSON.stringify({
              userInfo
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        


    }
    return (
        <form className="selectCountry" onSubmit={handleSelectCountry} >
            <h2> Select A Country:</h2>
            <label>ID:</label>
            <input
            type="text"
            onChange={(e) => SetID(e.target.value)}
            value={id}
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