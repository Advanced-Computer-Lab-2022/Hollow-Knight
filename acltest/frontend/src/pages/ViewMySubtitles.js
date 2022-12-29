import { Button ,Card, Typography} from "@mui/material";
import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/system";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';



const { useState } = require("react");
const ViewMySubtitles = () => {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('courseId');
  console.log(courseId)
  const [subtitles, setSubtitles] = useState(null)
  const [course, setcourse] = useState(null)
  const { user } =  useAuthContext();
  useEffect(() => {


    const viewSubtitles = async () => {
      console.log("b")
     
      if(user){
      const response = await fetch(`/api/instructors/viewmysubtitles?courseId=${courseId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`


        }
    });
      const result = await response.json()
      setcourse(courseId)



      if (response.ok) {
        setSubtitles(result)
        console.log(result)

      }}


    }
    viewSubtitles()


  }, [user])
  return (
    <Container className="courses">

      <Typography variant="h2"  align="center" marginRight={20} marginTop={3} >Subtitles</Typography>
      {subtitles && subtitles.map((subtitle) => (
        <div key={subtitle._id}>
          <Card  sx={{marginBottom:8,marginTop:8,marginLeft:10 ,borderRadius:8 ,width:900}}>
          <Container  sx={{marginTop:5,marginBottom:5}}>
          <Typography align="center" sx={{fontSize:35,marginBottom:6}}
          ><strong>{subtitle.Title}</strong> &nbsp;&nbsp;
          </Typography>
          <Box  sx={{ width: '40%',marginLeft:30,marginBottom:10 }}>
          <Stack spacing={4}>
          
          <Button variant="contained"  
             startIcon={<FileUploadOutlinedIcon />}
            onClick={() => window.location.href = `/uploadvideo?subtitleId=${subtitle._id}`} key={subtitle._id}
            margin="normal"
            padding="normal">
            Upload Video
          </Button>
          <Button variant="contained"
           startIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={() => window.location.href = `/addexercise?subtitleId=${subtitle._id}`} key={subtitle._id}
            margin="normal"
            padding="normal">
            Add Exercise
          </Button>
       
          </Stack>
          </Box>
          </Container>
          </Card>
        </div>
      ))}
      
        
      <Box  sx={{ width: '30%',marginLeft:45,marginBottom:10 }}>
          <Stack spacing={12}>

          <Button variant="contained"
           startIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={() => window.location.href = `/addsubtitle?courseId=${course}`} key={course}
            margin="normal"
            padding="normal"
            
            sx={{marginTop:2}}>
            Add Subtitle

          </Button>
        

          <Button
           sx={{}}
           startIcon={<AddCircleOutlineOutlinedIcon />}
           onClick={() => window.location.href = `/createexam?courseId=${courseId}`} key={courseId}
          variant="contained">
           Add Exam
          </Button>
      
          </Stack>
          </Box>
        

      

    </Container>
  )
}



export default ViewMySubtitles