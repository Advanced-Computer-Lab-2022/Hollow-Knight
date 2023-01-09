
import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import RatingCard from '../components/RatingCard';
import Rating from '@mui/material/Rating';
import { useAuthContext } from "../hooks/useAuthContext";
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const { useState } = require("react");
const ViewReview = () => {
   
    const [title, setTitle] = useState('')
    const [courses, setCourses] = useState(null)
    const { user } =  useAuthContext();
    
    
       
        const getCourses = async (e)=>{
            e.preventDefault() 
           
          
          const searching={title}
            
            const response = await fetch(`/api/instructors/viewreviews`,{
                method: 'POST',
                body: JSON.stringify(searching),
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
    
            })
            const json = await response.json()
            console.log(json[0])
         
           

            if(response.ok){
                setCourses(json[0])
               
             
            }
        }
       
       
    
    return(
        <div >
          
          <Typography variant='h3' align='center' sx={{marginTop:3,marginBottom:3}}> Course Reviews </Typography> 
       
       <form className="view" onSubmit={getCourses} >
     
<TextField
       sx={{width:600,marginLeft:50,marginTop:5}}
        fullWidth
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        label="Title"
        />


            <Button  type="submit" variant="contained" sx={{marginLeft:120,marginTop:4}}>Search</Button>  
            </form>

    
<Container>
   { courses&& <div>

    <Typography
sx={{marginLeft:50,marginTop:7,marginBottom:10}}
variant="h3"
> Available Reviews </Typography> 
      <Grid container>

        <Grid item xs={3} xl={3}>
          <Card
          
          >
            <Typography
            sx={{  fontSize:20, marginLeft:4 , marginBottom:2,marginTop:3}}
            >
          Your Overall Rating : {courses.overallRating}
            </Typography>
            <Rating name="read-only" value={courses.overallRating} precision={0.5} readOnly 
            sx={{ fontSize:34, marginLeft:7 ,marginBottom:4}}/>
            </Card>

        </Grid>

     
                                      
        <Grid  xs={9} xl={9}>
           {courses.review&&courses.review.map((data)=>(
          <div item key={data._id}>
            <RatingCard  data={data}/>
           
            
          </div>
 ))}
        </Grid>


      </Grid>

    </div>}
    </Container>


                  
 </div>
    )
}

export default ViewReview