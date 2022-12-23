import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useState } from 'react';

const GetAllDetails = ({ courses }) => {
 
  const [first,setFirst]=useState("")
  const [second,setSecond]=useState("")
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('userId');
  //console.log("hi",userId)

    const getname = async () => {
   
      if(courses.author){
     // console.log(courses.author,"hi")
      const response = await fetch(`/api/instructors/getname?authorid=${courses.author}`);
      const json = await response.json();
      setFirst(json.first_name)
      setSecond(json.last_name)
      console.log(first,second)

      if (response.ok) {
        console.log("found name")
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