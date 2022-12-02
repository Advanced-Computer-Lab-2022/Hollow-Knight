import { useState } from "react"

const UpdateInstructInfo = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('')
    const [biography, setBiography] = useState('')
    const updateinstructor = async (e) => {
        e.preventDefault()

        const instructor = {username, password,mail,biography}

        const response = await fetch('/api/instructors/updateinfo', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        setUsername('')
        setPassword('')
        setMail('')
        setBiography('')
        console.log('instructor changed', man)

        }

    }

    return (
        <form className="UpdateInstructor" onSubmit={updateinstructor} >
            <h2> Update Your Info</h2>

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
            <label>New Email :</label>
            <input
            type="text"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            />
             <label>New Biography :</label>
            <input
            type="text"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}
            />

            <button>Update Info</button>
        </form>
    )

}

export default UpdateInstructInfo