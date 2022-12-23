

import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import  Button from  '@mui/material/Button';
import { useParams } from "react-router-dom";
import GetAllDetails from '../components/GetAllDetails'
const { useState } = require("react");
const ViewDetailsTrainee = () => {
  
  const param = useParams();
  const [courses, setCourses] = useState("")

  const params = new URLSearchParams(window.location.search);
            const userId = params.get('userId');
           // console.log("hi",userId)

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
const register = async()=>
{

 const searching={userId,courses}
  const response = await fetch('/api/trainees/registercorporate', {
    method: 'POST',
    body: JSON.stringify(searching),
    headers: {
        'Content-Type' : 'application/json'
    }
  })
const res = await response.json()
if (response.ok) {

console.log('Request succesful')
}
}


  return (
      
      <div className="viewcoursedetails">
           <Card
                
                sx={{ width: 1400,height:670 }}>
          <GetAllDetails courses={courses}/>
       
          <Button
          variant='contained'
          sx={{marginTop:3,marginLeft:14,fontSize:22}}
          onClick={register}
          > Register </Button>
      

          </Card>
      </div>
    )
  }
  
  export default ViewDetailsTrainee