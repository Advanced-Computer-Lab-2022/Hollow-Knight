import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import RatingCard from '../components/RatingCard';
import Rating from '@mui/material/Rating';


const ViewInsReview = () => {



  const [instructors, setInstructors] = useState(null)


  useEffect(() => {
    const handler = async () => {
      const params = new URLSearchParams(window.location.search);
      const userId = params.get('userId');
      //e.preventDefault()
      const response = await fetch(`/api/instructors/getinst?userId=${userId}`);
      const json = await response.json()
      console.log(json)
      if (response.ok) {
        setInstructors(json)
        return;
      }
      return;
    }
    handler()
  }, [])



  return (
<Container>
   { instructors && <div>
      <Grid container>

        <Grid item xs={3} xl={3}>
          <Card
          
          >
            <Typography
            sx={{  fontSize:20, marginLeft:4 , marginBottom:2,marginTop:3}}
            >
          Your Overall Rating : {instructors.overallRating}
            </Typography>
            <Rating name="read-only" value={instructors.overallRating} precision={0.5} readOnly 
            sx={{ fontSize:34, marginLeft:7 ,marginBottom:4}}/>
            </Card>

        </Grid>

     
                                      
        <Grid  xs={9} xl={9}>
           {instructors.review&&instructors.review.map((data)=>(
          <div item key={data._id}>
            <RatingCard  data={data}/>
           
            
          </div>
 ))}
        </Grid>


      </Grid>

    </div>}
    </Container>
  )
}

export default ViewInsReview