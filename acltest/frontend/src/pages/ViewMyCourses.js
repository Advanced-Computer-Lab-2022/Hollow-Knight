import { useEffect } from "react"
const { useState } = require("react");
const ViewMyCourses = () => {

    const [courses, setCourses] = useState(null)
    useEffect(()=>{
       

        const viewCourses = async ()=>{
          console.log("bitch")
            const params = new URLSearchParams(window.location.search);
            const userId = params.get('userId');
            console.log(userId)
            const response = await fetch(`/api/instructors/viewmycourses?userId=${userId}`);
            const result = await response.json()
            
            if(response.ok){
                setCourses(result)
                console.log(result)
                
            }
          

        }
        viewCourses()
        
     
    },[])
    return(
      <div className="courses">
          {courses && courses.map((course)=>(
                                     <div key={course._id}>
                                     <p ><strong>Course Title:</strong>{course.title} &nbsp;&nbsp;
                                     <strong>Price:</strong>{course.price} &nbsp;&nbsp;
                                     </p>
                                     <button variant="contained"
            onClick={() => window.location.href=`/applydiscount?courseId=${course._id}`} key={course._id}
              margin="normal"
              padding="normal">
              Apply Discount
                      </button>
                      <button variant="contained"
            onClick={() => window.location.href=`/addsubtitle?courseId=${course._id}`} key={course._id}
              margin="normal"
              padding="normal">
              Add Subtitle
                      </button>
                                 </div>
          ))}
      </div>
  )
}
    


export default ViewMyCourses