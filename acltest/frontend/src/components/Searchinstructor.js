import { useState } from "react"
import CoursesDetails from "./Coursesdetails"

const SearchInstructor = () => {
    const [name, setName] = useState('')
    const [Courses, setCourses] = useState(null)
   //fetch courses
    const search = async (e) => {
        e.preventDefault()

        const instructor = {name}

        const response = await fetch('/api/instructors/search', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
            setCourses(man)    
           console.log(man)
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
          
          <div className="courses">
           {Courses && Courses.map(Courses => (
           <CoursesDetails Courses={Courses} key={Courses._id} />
           ))}
            </div>
            
            <button>Search</button>
        </form>
    )

}

export default SearchInstructor