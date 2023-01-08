
import { Typography } from "@mui/material";
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import { useAuthContext } from "../hooks/useAuthContext";
import  Button from  '@mui/material/Button';
import { useParams } from "react-router-dom";
import GetAllDetails from '../components/GetAllDetails'
import { useNavigate } from "react-router-dom";
const { useState } = require("react");
const ViewDetailsTrainee = () => {
  const { user } = useAuthContext();
  const [type, setType] = useState(null);
  const param = useParams();
  const [courses, setCourses] = useState("")
  const [registered, setRegistered] = useState(false)

  const params = new URLSearchParams(window.location.search);
            const courseId = params.get('courseId');
           // console.log("hi",userId)

  useEffect(() =>{

    const gettype= async() =>{
      console.log(user,"here")
     if(user){
      const response = await fetch("/api/courses/gettype", {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
          },
      });
      const json= await response.json();
      
      if (!response.ok) {
         setType("not found")
      }
      if(response.ok){      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
          //save the user to local storage
          console.log(json)
          setType(json)
      }
    }
  }
  
  const isRegistered = async() => {
    //e.preventDefault()
    const response = await fetch('/api/trainees/isregistered/',
    {method:"PATCH",
      body:JSON.stringify({courseId}),
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${user.token}`,
    }});
    const json = await response.json()
    if(!response.ok){

    }
    if(response.ok){
        setRegistered(json)
        console.log("registered found")
        return ;
    }
    return;
} 

    const handler = async() => {
        //e.preventDefault()
        const response = await fetch('/api/courses/coursedetails/'+courseId);
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

    handler();
    gettype();
    isRegistered();
},[param])
const register = async()=>
{
  const response = await fetch('/api/trainees/registercorporate', {
    method: 'POST',
    body:JSON.stringify({courseId}),
    headers: {
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${user.token}`,
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
       
          {type=="trainee"&&!registered&&<Button
          variant='contained'
          sx={{marginTop:3,marginLeft:14,fontSize:22}}
          onClick={() =>
            (window.location.href = `creditcardinfo?courseId=${courseId}`)
          }
          > Pay For Course </Button>}
          {type=="corporate trainee"&&!registered&&<Button
          variant='contained'
          sx={{marginTop:3,marginLeft:14,fontSize:22}}
          onClick={register}
          > Register </Button>}
          {registered&&<Typography color="darkblue" align="center" sx={{fontSize:25,marginBottom:3,marginLeft:80}} >
              Registered
              </Typography>}
      

          </Card>
      </div>
    )
  }
  
  export default ViewDetailsTrainee