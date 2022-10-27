import { useState } from "react"

const SearchInstructor = () => {
    const [name, setName] = useState('')

    const search = async (e) => {
        e.preventDefault()

        const instructor = {name}

        const response = await fetch('/api/instructors/search', {
            method: 'Get',
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
        <form className="Search" onSubmit={search} >
            <h2> Search</h2>

            <label>Name:</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <button>Search</button>
        </form>
    )

}

export default SearchInstructor