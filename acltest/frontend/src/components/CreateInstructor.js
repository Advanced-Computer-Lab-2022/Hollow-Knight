import { useState } from "react"

const CreateInstructor = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const makeinstructor = async (e) => {
        e.preventDefault()

        const instructor = {name, password}

        const response = await fetch('/api/instructors', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        console.log('instructor added', man)
        }

    }

    return (
        <form className="createinstructor" onSubmit={makeinstructor} >
            <h2> Add instructor</h2>

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

            <button>Add Instructor</button>
        </form>
    )

}

export default CreateInstructor