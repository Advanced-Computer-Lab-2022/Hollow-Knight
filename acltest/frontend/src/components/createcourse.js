import { useState } from "react"

const CreateCourse= () => {
    const [Title, setTitle] = useState('')
    const [Price, setPrice] = useState('')
    const [Subject, setsubject] = useState('')
    const [author, setauthor] = useState('')
    const [rating, setrating] = useState('')

    const makeCourse = async (e) => {
        e.preventDefault()

        const instructor = {Title, Price, Subject, author, rating}

        const response = await fetch('/api/courses/', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json'
            }
            

        })
        const man = await response.json()
        if (response.ok) {
        console.log('Course added', man)
        }

    }
    return (
        <form className="CreateCourse" onSubmit={makeCourse} >
            <h2> Add course</h2>

            <label>Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            />

            <label>Price:</label>
            <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
            />
            
            <label>Subject:</label>
            <input
            type="text"
            onChange={(e) => setsubject(e.target.value)}
            value={Subject}
            />
            
            <label>author:</label>
            <input
            type="text"
            onChange={(e) => setauthor(e.target.value)}
            value={author}
            />
            
            <label>rating:</label>
            <input
            type="text"
            onChange={(e) => setrating(e.target.value)}
            value={rating}
            />

            <button>Add Course</button>
        </form>
    )
}
export default CreateCourse