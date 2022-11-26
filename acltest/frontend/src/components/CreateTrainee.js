import { useState } from "react"

const CreateTrainee = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const maketrainee = async (e) => {
        e.preventDefault()

        const trainee = {username, password,country}

        const response = await fetch('/api/trainees', {
            method: 'POST',
            body: JSON.stringify(trainee),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
            setCountry('')
            setPassword('')
            setUsername('')
        console.log('trainee added', man)
        }

    }

    return (
        <form className="createtrainee" onSubmit={maketrainee} >
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
             <label>Country:</label>
            <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            />


            <button>Add Trainee</button>
        </form>
    )

}

export default CreateTrainee