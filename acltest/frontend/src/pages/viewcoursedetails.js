
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import  Button from  '@mui/material/Button';

import { useParams } from "react-router-dom";
import GetAllDetails from '../components/GetAllDetails'
import UpdateCourse from '../components/UpdateCourse';
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from '@mui/material';
const { useState } = require("react");
const Viewcoursedetails = () => {

  const param = useParams();
  const [courses, setCourses] = useState("")
  const [update, setUpdate] = useState("false")

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
    const response1 = await fetch(`/api/instructors/deletecourse/` + courses._id , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response1.json()
    if (response1.ok) {
      console.log("Course has been Deleted ")
      console.log(json)
      window.location.href = `/viewmycourses`

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

    <Container className="viewcoursedetails">
      <Card

        sx={{marginBottom:4 ,borderRadius:4}}>
        <GetAllDetails courses={courses} />
       
       
        {courses.published =="false" &&

        
        <Container
        sx={{marginLeft:20,marginTop:6}}
        classname="update button">

        <Button
          variant='contained'
          sx={{marginLeft:19,fontSize:18,marginBottom:5}}
         onClick={handleClick}
         >Delete Course
         </Button>
    
      
        
          <Button
            variant='contained'
            sx={{marginLeft:5,fontSize:18,marginBottom:5}}
           onClick={updateClick}>
            Update 
            </Button>
            </Container>}
        
      </Card>
      <Card>
        {update=="true" && <UpdateCourse courses={courses} />}</Card>
    </Container>
  )
}

export default Viewcoursedetails