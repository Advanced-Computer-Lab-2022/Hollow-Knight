
import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";
import GetAllDetails from '../components/GetAllDetails'
import UpdateCourse from '../components/UpdateCourse';
import { useAuthContext } from "../hooks/useAuthContext";
const { useState } = require("react");
const Viewcoursedetails = () => {
  
  const param = useParams();
  const [courses, setCourses] = useState("")
  const[update,setUpdate]=useState(null)

  const { user } = useAuthContext();

  useEffect(() =>{
    const handler = async() => {
        //e.preventDefault()
        
        const response = await fetch('/api/courses/coursedetails/'+param.id,{
          headers: {
  
            'Authorization': `Bearer ${user.token}` 
              
          },
        });
        const json = await response.json()
        if(!response.ok){

        }
        if(response.ok){
            setCourses(json)
            console.log("Found Workout")
            return ;
        }
        return;
    }
    handler()
},[param])



const handleClick = async()=>{
  const response1 = await fetch(`/api/instructors/deletecourse/`+courses._id+`?userId=${courses.author}`,{
    method : 'DELETE'
  })
  const json = await response1.json()
  if(response1.ok){
    console.log("Course has been Deleted ")  
    console.log(json)
    window.location.href=`/instructor?userId=${courses.author}`

  }
}
const updateClick = async()=>{
  setUpdate("true")
}

const contract= async()=>{
  window.location.href=`/ViewContract?courseId=${courses._id}`
}
  
  return (
      
      <div className="viewcoursedetails">
          <GetAllDetails courses={courses}/>
        <button onClick={handleClick}>Delete Course</button>
      {!update && <div classname ="update button"><button onClick={updateClick}>Update </button></div>}
        {update && <UpdateCourse courses={courses} /> }
        <button onClick={contract}>View Contract</button>
      </div>
    )
  }
  
  export default Viewcoursedetails