import InstructorBar from "../components/InstructorBar";
import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import RatingCard from '../components/RatingCard';
import Rating from '@mui/material/Rating';
const { useState } = require("react");
const ViewReview = () => {
   
    const [title, setTitle] = useState('')
    const [courses, setCourses] = useState(null)
   
    
    
       
        const getCourses = async (e)=>{
            e.preventDefault() 
           
            const params = new URLSearchParams(window.location.search);
            const userId = params.get('userId');
          const searching={title}
            
            const response = await fetch(`/api/instructors/viewreviews?userId=${userId}`,{
                method: 'POST',
                body: JSON.stringify(searching),
                headers: {
                    'Content-Type' : 'application/json'
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
          <InstructorBar x={2}/>
          <h1> Course Reviews </h1> 
       
       <form className="view" onSubmit={getCourses} >
       <label>Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <button>Search</button>  
            </form>
<h5> Available Reviews </h5> 
    
<Container>
   { courses&& <div>
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