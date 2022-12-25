import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

const GetAllDetails = ({ courses }) => {
 
  const [first,setFirst]=useState("")
  const [second,setSecond]=useState("")
  const { user } =  useAuthContext();
  console.log(user)
  

    const getname = async () => {
   var authorid=courses.author
      if(courses.author&&user){
 
      const response1 = await fetch(`/api/instructors/getname?authorid=${authorid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
    });
      const res = await response1.json();
      

      if (response1.ok) {
        console.log("found name")
        setFirst(res.first_name)
      setSecond(res.last_name)
      console.log(first,second)
      }
    };
  }
    getname();




  //console.log("here")
  //console.log(courses)
  return (

    <div className="viewcoursedetails">

      <Typography
        variant="h2"
        gutterBottom
        align='center'
        marginTop={8}
        marginBottom={12}
      >
        {courses.title}
      </Typography>

      <Typography

        sx={{ marginLeft: 15, fontSize: 23 }}
      >
        <p><strong>Price : </strong>{courses.price}</p>

        <p><strong>Subject : </strong>{courses.subject}</p>

        <p><strong>Author : </strong>{first} {second}</p>

        <p><strong>Rating : </strong>{courses.overallRating}</p>

        <p><strong>Summary : </strong>{courses.summary}</p>

        <p><strong>Total Hours : </strong>{courses.total_hours}</p>
      </Typography>

    </div>
  )
}

export default GetAllDetails