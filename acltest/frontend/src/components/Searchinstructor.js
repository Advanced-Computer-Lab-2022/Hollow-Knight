import { useState } from "react"
import CoursesDetails from "./Coursesdetails"
import { useAuthContext } from "../hooks/useAuthContext";

const SearchInstructor = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [Courses, setCourses] = useState(null)
    const [subject, setSubject] = useState('')
    const [price, setPrice] = useState('')
    const { user } = useAuthContext();
    //fetch courses
    const search = async (e) => {
        e.preventDefault()
        const searching = {name,title,subject,price}
        
        const response = await fetch('/api/instructors/search', {
            method: 'POST',
            body: JSON.stringify(searching),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`

            }

        })
        const man = await response.json()
        if (response.ok) {
            setCourses(man)    
            console.log('shobak', man)
        }

    }
    

    return (

        <form className="Search" onSubmit={search} >
            

            <label>Name:</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <label>Subject:</label>
            <input
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            />
              <label>price:</label>
            <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            />
              <button>Search</button>
          <div className="courses">
           {Courses && Courses.map(Courses => (
           <CoursesDetails key={Courses._id} Courses={Courses} />
           ))}
            </div>
            
          
        </form>
    )

}

export default SearchInstructor