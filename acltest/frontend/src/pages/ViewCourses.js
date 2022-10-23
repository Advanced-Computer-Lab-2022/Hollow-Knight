import { useEffect,useState } from "react"
import CoursesTable from "../components/ViewCoursesTable"
const ViewCourses = () =>{
    const [courses,setCourses] = useState(null)
    useEffect(()=>{
       

        const fetchCourses = async ()=>{
            const response = await fetch('/api/courses')
            const json = await response.json()

            if(response.ok){
                
                setCourses(json)
                console.log("working")
            }

        }

        fetchCourses()

    },[])
    return(
        <div className="courses">
            {courses && courses.map((courses)=>(
                <CoursesTable key={courses._id} courses = {courses}/>
            ))}
        </div>
    )
}
export default ViewCourses