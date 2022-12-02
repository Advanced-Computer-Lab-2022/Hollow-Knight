import { useEffect,useState } from "react"
const ViewMyCourses = () => {
  const [courses,setCourses] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('userId');
  console.log(userId)
  useEffect(()=>{
     

      const fetchCourses = async ()=>{
          const response = await fetch(`/api/trainees/getmycourses?userId=${userId}`)
          const json = await response.json()
          console.log(json)

          if(response.ok){
              setCourses(json)
              
          }

      }

      fetchCourses()
      console.log('here')
      console.log(courses)

  },[])


  
    return (
      <div className="ViewMyCourses">
      <h1>My Courses</h1>
      {courses && courses.map((course)=>(
        <div key={course._id}>
        <p ><strong>Course Title:</strong>{course.title} &nbsp;&nbsp;
        <button onClick={() => window.location.href=`coursecontent?courseId=${course._id}`}>Go to Course</button>
        </p>
    </div>
      ))}
 </div>
    )
  }
  
  export default ViewMyCourses
  