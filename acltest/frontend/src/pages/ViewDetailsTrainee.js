
import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";
import GetAllDetails from '../components/GetAllDetails'
import UpdateCourse from '../components/UpdateCourse'
const { useState } = require("react");
const ViewDetailsTrainee = () => {
  
  const param = useParams();
  const [courses, setCourses] = useState("")
  const[update,setUpdate]=useState(null)



  useEffect(() =>{
    const handler = async() => {
        //e.preventDefault()
        const response = await fetch('/api/courses/coursedetails/'+param.id);
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



  return (
      
      <div className="viewcoursedetails">
          <GetAllDetails courses={courses}/>
     
      </div>
    )
  }
  
  export default ViewDetailsTrainee