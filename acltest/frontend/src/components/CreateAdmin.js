import { useState } from "react"

const CreateAdmin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const makeadmin = async (e) => {
        e.preventDefault()

        const admin = {username, password,country}

        const response = await fetch('/api/admins', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        setUsername('')
        setPassword('')
        setCountry('')
        console.log('admin added', man)

        }

    }

    return (
        <form className="createadmin" onSubmit={makeadmin} >
            <h2> Add admin</h2>

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
            <label>Country :</label>
            <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            />

            <button>Add admin</button>
        </form>
    )

}

export default CreateAdmin