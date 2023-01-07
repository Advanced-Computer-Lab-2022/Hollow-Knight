import { Button ,Card, Typography} from "@mui/material";
import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/system";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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

  const deletes = async (id) => {
     console.log(id)
     const response1 = await fetch(`/api/instructors/deletesub/` + id , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
if(response1.ok)
{
  console.log("deleted")
  const newSub = subtitles.filter(subtitle=>subtitle._id!=id)
  setSubtitles(newSub)
}
if(!response1.ok)
{
  console.log("couldn't delete")
}

  }

  return (
    <Container >

      <Typography variant="h2"  align="center" marginRight={20} marginTop={3} >Subtitles</Typography>
      {subtitles && subtitles.map((subtitle) => (
        <div key={subtitle._id}>
          <Card  sx={{marginBottom:8,marginTop:8,marginLeft:10 ,borderRadius:8 ,width:900}}>
          <Container  sx={{marginTop:2}}>
          <CardHeader
          action={
            <IconButton  onClick={()=>deletes(subtitle._id)} >
              <DeleteOutlineOutlinedIcon sx={{fontSize:30}}/>
            </IconButton>
          }
          title={<Typography align="center" sx={{fontSize:35,marginBottom:4}}
          ><strong>{subtitle.Title}</strong> &nbsp;&nbsp;
          </Typography>}
          />
         
          <CardContent >
         
     
          <Box  sx={{ width: '40%',marginLeft:30,marginBottom:10 }}>
          <Stack spacing={4}>
        
          <Button  variant="contained"  
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
          </CardContent>
          <CardActions disableSpacing>
          <IconButton sx={{marginLeft:98,marginTop:-40}}>
          <ArrowForwardIcon sx={{fontSize:40,color:"black"}}/>
        </IconButton>
          </CardActions>
          </Container>
          </Card>
        </div>
      ))}
      
        
      <Box  sx={{ width: '30%',marginLeft:45,marginBottom:10 }}>
          <Stack spacing={4}>


      
          <Button
          variant="contained"
           startIcon={<AddCircleOutlineOutlinedIcon />}
           onClick={() => window.location.href = `/createexam?courseId=${courseId}`} key={courseId}
         >
           Add Exam
          </Button>

          <Button variant="contained"
           startIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={() => window.location.href = `/addsubtitle?courseId=${course}`} key={course}
            >
            Add Subtitle
          </Button>
        
      

          <Button
          variant="contained"
           startIcon={<AddCircleOutlineOutlinedIcon />}
           onClick={() => window.location.href = `/addpreviewvideo?courseId=${courseId}`} key={courseId}
         >
         Course Preview Video
          </Button>
      
      
     


          </Stack>
          </Box>
        

      

    </Container>
  )
}



export default ViewMySubtitles