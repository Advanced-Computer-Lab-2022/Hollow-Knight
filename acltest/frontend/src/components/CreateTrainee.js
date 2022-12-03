import { useState } from "react"

const CreateTrainee = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const maketrainee = async (e) => {
        e.preventDefault()

        const trainee = {name, password}

        const response = await fetch('/api/trainees', {
            method: 'POST',
            body: JSON.stringify(trainee),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        console.log('trainee added', man)
        }

    }

    return (
        <form className="createtrainee" onSubmit={maketrainee} >
            <h2> Add trainee</h2>

            <label>Name:</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>password:</label>
            <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

            <button>Add Trainee</button>
        </form>
    )

}

export default CreateTrainee