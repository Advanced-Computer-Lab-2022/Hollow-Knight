import { Button ,Card, Typography} from "@mui/material";
import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/system";


const { useState } = require("react");
const ViewMySubtitles = () => {

  const [subtitles, setSubtitles] = useState(null)
  const [course, setcourse] = useState(null)
  const { user } =  useAuthContext();
  useEffect(() => {


    const viewSubtitles = async () => {
      console.log("b")
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId');
      console.log(courseId)
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
    <div className="courses">
      <Typography variant="h2"  align="center" marginRight={20} marginTop={3} >Subtitles</Typography>
      {subtitles && subtitles.map((subtitle) => (
        <div key={subtitle._id}>
          <Card  sx={{marginBottom:8,marginTop:8,marginLeft:35 ,borderRadius:8 ,width:700}}>
          <Container  sx={{marginTop:5,marginBottom:5}}>
          <Typography align="center" sx={{fontSize:35,marginBottom:3}}
          ><strong>{subtitle.Title}</strong> &nbsp;&nbsp;
          </Typography>
          <Button variant="contained"  
            sx={{marginRight:8,marginLeft:5}}
            onClick={() => window.location.href = `/uploadvideo?subtitleId=${subtitle._id}`} key={subtitle._id}
            margin="normal"
            padding="normal">
            Upload Video
          </Button>
          <Button variant="contained"
           sx={{marginRight:8,}}
            onClick={() => window.location.href = `/addexercise?subtitleId=${subtitle._id}`} key={subtitle._id}
            margin="normal"
            padding="normal">
            Add Exercise
          </Button>
          <Button
           onClick={() => window.location.href = `/createexam?subtitleId=${subtitle._id}`} key={subtitle._id}
          variant="contained">
           Add Exam
          </Button>
          </Container>
          </Card>
        </div>
      ))}
      {
        <div>
          <Typography variant="h4"  marginRight={20} align="center">Add Subtitle</Typography>

          <Button variant="contained"
            onClick={() => window.location.href = `/addsubtitle?courseId=${course}`} key={course}
            margin="normal"
            padding="normal"
            
            sx={{marginBottom:10 ,marginLeft:70,marginTop:4}}>
            Add Subtitle

          </Button>
        </div>


      }

    </div>
  )
}



export default ViewMySubtitles