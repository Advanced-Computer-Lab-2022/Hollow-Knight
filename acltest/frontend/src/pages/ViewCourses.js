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
            {courses && courses.map(()=>(
                <p key = {courses._id}>{courses.title}</p>
            ))}
        </div>
    )
}
export default ViewCourses