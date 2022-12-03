import { useEffect,useState } from "react"
import CoursesTable from "../components/ViewCoursesTable"
const ViewCoursesWithPrice = () =>{
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
                 <CoursesTable key={course._id} courses = {course}/>
            ))}
        </div>
    )
}
export default ViewCoursesWithPrice