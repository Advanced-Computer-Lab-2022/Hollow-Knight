
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import  Button from  '@mui/material/Button';

import { useParams } from "react-router-dom";
import GetAllDetails from '../components/GetAllDetails'
import UpdateCourse from '../components/UpdateCourse'
const { useState } = require("react");
const Viewcoursedetails = () => {

  const param = useParams();
  const [courses, setCourses] = useState("")
  const [update, setUpdate] = useState("false")



  useEffect(() => {
    const handler = async () => {
      //e.preventDefault()
      const response = await fetch('/api/courses/coursedetails/' + param.id);
      const json = await response.json()
      if (!response.ok) {

      }
      if (response.ok) {
        setCourses(json)
        console.log("Found Workout")
        return;
      }
      return;
    }
    handler()
  }, [param])



  const handleClick = async () => {
    const response1 = await fetch(`/api/instructors/deletecourse/` + courses._id + `?userId=${courses.author}`, {
      method: 'DELETE'
    })
    const json = await response1.json()
    if (response1.ok) {
      console.log("Course has been Deleted ")
      console.log(json)
      window.location.href = `/instructor?userId=${courses.author}`

    }
  }
  const updateClick = async () => {
    
    if(update=="false")
    {
      setUpdate("true")
    }else{
      setUpdate("false")
    }
  }



  return (

    <div className="viewcoursedetails">
      <Card

        sx={{ width: 1400, height: 670,marginBottom:4 }}>
        <GetAllDetails courses={courses} />
        <Button
          variant='contained'
          sx={{marginTop:3,marginLeft:14,fontSize:22}}
         onClick={handleClick}
         >Delete Course
         </Button>
    
        { 
        <div classname="update button">
          <Button
            variant='contained'
            sx={{marginTop:-9,marginLeft:60,fontSize:23}}
           onClick={updateClick}>
            Update 
            </Button>
            </div>}
        
      </Card>
      <Card>
        {update=="true" && <UpdateCourse courses={courses} />}</Card>
    </div>
  )
}

export default Viewcoursedetails