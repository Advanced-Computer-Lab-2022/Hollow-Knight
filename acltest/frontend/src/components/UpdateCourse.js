import { useState } from "react";
import { Button, TextField, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateCourse =({courses})=>{

   const [title,setTitle]=useState("")
   const [price,setPrice]=useState("")
   const [subject,setSubject]=useState("")

   const [summary,setSummary]=useState("")
   
   const [total_hours,setTotal_hours]=useState("")
   const { user } = useAuthContext();
  

   
   const updatecourseClick = async(e)=>{

    e.preventDefault()

    const course = {title,price,subject,summary,total_hours}
    
    const response = await fetch(`/api/instructors/updatecourse/`+courses._id, {
      method: 'PATCH',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    console.log("here")
    if (!response.ok) {
     console.log("error")
    }
    console.log("here")
    if (response.ok) {
        
      
      setTitle('')
      setPrice('')
      setSubject('')
      setSummary('')
      setTotal_hours('')
      console.log(' course updated:', json)
      window.location.href = `/instructor/coursedetails/`+courses._id
    }
}

 return(
    <Container className="update">

      

        <Typography sx={{marginTop:4,marginBottom:6}}variant="h4" align="center">
            Insert the data to updated
        </Typography>
   <Container
   sx={{marginLeft:30}}>
        <Stack spacing={3}>
        <TextField
        sx={{width:600}}
        fullWidth
        type="text"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        label="Course Title"
        />
    


<TextField
       sx={{width:600}}
        fullWidth
        type="number"
        onChange={(e)=> setPrice(e.target.value)}
        value={price}
        label="Price"
        />
  

<TextField
       sx={{width:600}}
        fullWidth
        type="text"
        onChange={(e)=> setSubject(e.target.value)}
        value={subject}
        label="Subject"
        />



        
<TextField
       sx={{width:600}}
       type="text"
       onChange={(e)=> setSummary(e.target.value)}
       value={summary}
        label="Summary"
        />

 
<TextField
       sx={{width:600}}
       type="Number"
        onChange={(e)=> setTotal_hours(e.target.value)}
        value={total_hours}
        label="Total Hours "
        />
        </Stack>

          <Button
          sx={{marginBottom:4,marginTop:4,marginLeft:60}} variant="contained" onClick={updatecourseClick}> Update Course </Button >
          </Container>
   </Container>
      )
}

export default UpdateCourse 