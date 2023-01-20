
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Embed2 from "../components/Embed2"


const MostPopular = () => {

const [mostPopular, setMostPopular] = useState([]);
const { user } = useAuthContext();
useEffect(() => {
const fetchMostPopular = async () => {
const response = await fetch("/api/courses/mostpopular",{
method: 'GET',
headers: {
    
'Content-Type': 'application/json', 
'Authorization': `Bearer ${user.token}`

}});
const json = await response.json();

if (response.ok) {
setMostPopular(json);
}
};
if(user){
fetchMostPopular();
}
}, [user]);
return (
<div className="courses">
{mostPopular &&
mostPopular.map((course) => (
    <Grid item  key={course._id} xs={6}>
      <p>
      
        
      <Card 
      
      sx={{marginBottom:2,marginTop:4 ,borderRadius:3, width:550,height:660}}>
      <Container  sx={{marginTop:5,marginBottom:3}}>
      <Typography
      align="center"  
      sx={{fontSize:30,marginBottom:2}}>
        <strong>{course.title}</strong>
         &nbsp;&nbsp;
        </Typography>
        
        <Typography 
        align="center" 
         sx={{fontSize:22,marginBottom:1}}>
        Total Hours : {course.total_hours} &nbsp;&nbsp;
        </Typography>
        
        <Typography  
        align="center" 
        sx={{fontSize:25,marginBottom:0}}>
        Rating : {course.overallRating}
        </Typography>

         
        <Typography  
        align="center" 
        sx={{fontSize:25,marginBottom:0}}>
        Instructor : {course.name}
        </Typography>

        <Stack direction="row" spacing={2} sx={{marginLeft:24,marginTop:1}}>
        <Typography  
        align="center" 
        sx={{fontSize:25,marginBottom:2,marginTop:-0.5}}>
        Price : {course.price}
        </Typography>
        <Typography    align="center"  sx={{fontSize:22,marginTop:9}}> 
        </Typography>
        </Stack>
        {course.video &&
        <Embed2 embedId={course.video} />
        }
        </Container>

        <Button variant="contained" sx={{marginLeft:40,marginBottom:4}} onClick={() => window.location.href= `/traineesearchcourse?courseId=`+course._id} >View Details</Button>
        </Card>
        
     
        
      </p>

      </Grid>
   
  ))
  }
</div>
);
};



  




export default MostPopular;
