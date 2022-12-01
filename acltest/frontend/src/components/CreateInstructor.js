import { useState } from "react"

const CreateInstructor = () => {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const makeinstructor = async (e) => {
        e.preventDefault()

        const instructor = {username, password,country}
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
            setusername('')
            setPassword('')
            setCountry('')
        console.log('instructor added', man)
        }

    }

    return (
        <form className="createinstructor" onSubmit={makeinstructor} >
            <h2> Add instructor</h2>

            <label>Name :</label>
            <input
            type="text"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            />
           
            <label>password :</label>
            <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
             
             <label>Country :</label>
            <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            />
             

            <button>Add Instructor</button>
        </form>
    )

}

export default CreateInstructor