import { useState } from "react"

const CreateAdmin = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const makeadmin = async (e) => {
        e.preventDefault()

        const admin = {name, password}

        const response = await fetch('/api/admins', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        console.log('admin added', man)
        }

    }

    return (
        <form className="createadmin" onSubmit={makeadmin} >
            <h2> Add admin</h2>

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

            <button>Add admin</button>
        </form>
    )

}

export default CreateAdmin