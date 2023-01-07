import { Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';

const GetAllDetails = ({ courses }) => {
 




  return (

    <div className="viewcoursedetails">
<Container sx={{}}>
      <Typography
        variant="h2"
        gutterBottom
        align='center'
        marginTop={6}
        marginBottom={6}
      >
        {courses.title}
      </Typography>

   
             <Stack spacing={3} sx={{marginBottom:6}}>
        
      
        <Typography
        align='center' sx={{fontSize:24,}}
        ><strong>Price : </strong>{courses.price}</Typography>

        <Typography
          align='center' sx={{fontSize:24}}
          ><strong>Subject : </strong>{courses.subject}</Typography>

        <Typography
          align='center' sx={{fontSize:24}}
        ><strong>Author : </strong>{courses.name}</Typography>

        <Typography
          align='center' sx={{fontSize:24}}
        ><strong>Rating : </strong>{courses.overallRating}</Typography>

        <Typography
          align='center' sx={{fontSize:24}}
        ><strong>Summary : </strong>{courses.summary}</Typography>

        <Typography
          align='center' sx={{fontSize:24}}
        ><strong>Total Hours : </strong>{courses.total_hours}</Typography>
        
        </Stack>
      
      </Container>

    </div>
  )
}

export default GetAllDetails