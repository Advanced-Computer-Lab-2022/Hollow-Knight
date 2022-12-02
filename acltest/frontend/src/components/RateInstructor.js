import { useState } from "react"

const RateInstructor = () => {
    const [traineeusername, settraineeusername] = useState('')
    const [instructorusername, setinstructorusername] = useState('')
    const [review, setreview] = useState('')
    const rateinstructor = async (e) => {
        e.preventDefault()

        const instructor = {traineeusername,instructorusername,review}

        const response = await fetch('/api/instructors/rate', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        settraineeusername('')
        setinstructorusername('')
        setreview('')
        console.log('instructor changed', man)

        }

    }

    return (
        <form className="UpdateInstructor" onSubmit={rateinstructor} >
            <h2> Update Your Info</h2>

            <label>Your Name:</label>
            <input
            type="text"
            onChange={(e) => settraineeusername(e.target.value)}
            value={traineeusername}
            />

            <label>Instructor's name:</label>
            <input
            type="text"
            onChange={(e) => setinstructorusername(e.target.value)}
            value={instructorusername}
            />
            <label>Your rating:</label>
            <input
            type="text"
            onChange={(e) => setreview(e.target.value)}
            value={review}
            />

            <button>Submit Rating</button>
        </form>
    )

}

export default RateInstructor