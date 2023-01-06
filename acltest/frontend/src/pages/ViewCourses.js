import { useEffect, useState } from "react";
import { Card, Grid,Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useAuthContext } from "../hooks/useAuthContext";
import Embed2 from "../components/Embed2"
import YoutubeEmbed from "../components/YoutubeEmbed";
import Stack from '@mui/material/Stack';

import ViewPriceCo from "../components/ViewPriceCo";
const countryToCurrency = require("country-to-currency");
const ViewCourses = () => {
  const [courses, setCourses] = useState(null);
  const [userinfo, setUserinfo] = useState(null);
  const [done, setDone] = useState(false);
  const { user } = useAuthContext();
  const [currencyName, setCurrencyName] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses",{
        method: 'GET',
        headers: {

          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`


        }
    });
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };
    if(user && !done){
    const fetchuser = async () => {
      console.log("hello")
      const response = await fetch("/api/instructors/getuser",{
        method: 'GET',
        headers: {

          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`


        }
    });
      const json = await response.json();

      if (response.ok) {
        setUserinfo(json);
       
      }
    };

  
    fetchuser()
      fetchCourses();
    
      if(userinfo){
        
      setCurrencyName(countryToCurrency[userinfo.countryAbb]);
      setDone(true)
      console.log(countryToCurrency[userinfo.countryAbb]);
      }
    }
  
 

}, [user,userinfo]);

useEffect(() => {
      
}, [userinfo]);


  return (
    <div className="courses">
      <Container>
      <Grid container>
      {courses &&
        courses.map((course) => (
          <Grid item  key={course._id} xs={6}>
            <p>
            
              
            <Card 
            
            sx={{marginBottom:2,marginTop:4 ,borderRadius:3, width:550,height:560}}>
            <Container  sx={{marginTop:5,marginBottom:5}}>
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
              <Stack direction="row" spacing={2} sx={{marginLeft:24,marginTop:1}}>
              <Typography  
              align="center" 
              sx={{fontSize:25,marginBottom:2,marginTop:-0.5}}>
              Price : 
              </Typography>
              <Typography    align="center"  sx={{fontSize:22,marginTop:9}}> 
              <ViewPriceCo price={course.price} currencyName={currencyName} />
              </Typography>
              </Stack>
              {course.video &&
              <Embed2 embedId={course.video} />
              }
              </Container>
              </Card>
              
           
              
            </p>
            </Grid>
         
        ))}
           </Grid>
         </Container>
    </div>
   
  );
};
export default ViewCourses;
