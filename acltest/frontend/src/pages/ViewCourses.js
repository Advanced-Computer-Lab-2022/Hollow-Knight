import { useEffect,useState } from "react"
const ViewCourses = () =>{
    const [courses,setCourses] = useState(null)
    useEffect(()=>{
       

        const fetchCourses = async ()=>{
            const response = await fetch('/api/courses')
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }

        }

        fetchCourses()

    },[])
    return(
        <div className="courses">
            {courses && courses.map((course)=>(
                                       <div key={course._id}>
                                       <p ><strong>Course Title:</strong>{course.title} &nbsp;&nbsp;
                                       <strong>Total Hours:</strong>{course.hours} &nbsp;&nbsp;
                                       <strong>Course:</strong>{course.rating}
                                       </p>
                                   </div>
            ))}
        </div>
    )
}
export default ViewCourses