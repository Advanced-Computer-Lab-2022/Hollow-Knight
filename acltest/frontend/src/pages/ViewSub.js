import { Container ,Box} from "@mui/system";
import { useAuthContext } from "../hooks/useAuthContext";
import { Typography,Button,Card } from "@mui/material";
import {  useState ,useEffect} from "react";
import YoutubeEmbed from"../components/YoutubeEmbed"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ViewSub =()=>{

    const params = new URLSearchParams(window.location.search);
const subtitleId = params.get('subtitleId');
console.log(subtitleId)
    const [subtitle, setSubtitle] = useState(null);
    const { user } = useAuthContext();
    useEffect(() => {
    const getsubtitle = async () => {
      
  if(user){
        const response = await fetch(
          `/api/instructors/getsubtitle?subtitleId=${subtitleId}`,{
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const res = await response.json();  
  
        if (response.ok) {
          setSubtitle(res);
        }
      
      };
    }
      getsubtitle();
    }, [user])

    const deletes = async (exerciseid) => {
        console.log(exerciseid)
        const load={exerciseid}
        console.log(load)
        const response1 = await fetch(`/api/instructors/removex?subtitleId=${subtitleId}`, {
          method: 'PATCH',
          body:JSON.stringify(load),
         
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        if (response1.ok) {
          console.log("deleted")
       
         
        }
        if (!response1.ok) {
          console.log("couldn't delete")
        }
    
      }

      const deletev = async (videoid) => {
        console.log(videoid)
        const load={videoid}
        console.log(load)
        const response1 = await fetch(`/api/instructors/removevideo?subtitleId=${subtitleId}`, {
          method: 'PATCH',
          body:JSON.stringify(load),
         
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        if (response1.ok) {
          console.log("deleted")  
        }
        if (!response1.ok) {
          console.log("couldn't delete")
        }
    
      }

    return(
        <div>
{subtitle && <Container>
{subtitle.exercises.map((exercises) => (
            <Container key={exercises._id} sx={{marginTop:5}}>

<Card   sx={{marginBottom:3,width:700,marginLeft:25,borderRadius:4} }>
    <Container >
        <CardHeader
         action={
            <IconButton onClick={() => deletes(exercises._id)}  >
              <DeleteOutlineOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          }
        title={<Typography
            align="center"
            sx={{fontSize:26,marginLeft:3,marginBottom:2,marginTop:4}}
            ><strong>{exercises.title}</strong> </Typography>}
        />
              
              <CardContent>
              <Typography
              align="center"
              sx={{fontSize:22,marginBottom:4}}
              >Grade : {exercises.maxGrade}</Typography>

              <Button variant="contained"
              sx={{marginLeft:29,marginBottom:4}}
                onClick={() =>
                  (window.location.href = `/getanswers?subid=${subtitle._id}&id=${exercises._id}`)
                }
              >
                Go to Exercise
              </Button>
              </CardContent>
              </Container>
              </Card>
            </Container>
            
          ))}
            {subtitle.video.map((video) => (
            <Container key={video._id}sx={{marginBottom:8}}>
                <Card  sx={{marginBottom:5,marginTop:5,borderRadius:4}}>
                    <Container>
                    <CardHeader
         action={
            <IconButton onClick={() => deletev(video._id)}  >
              <DeleteOutlineOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          }
        />
                    <CardContent>  
                        <Box sx={{marginLeft:12}}>
              <YoutubeEmbed embedId ={video.link}  />
              </Box>
              <Typography align="center"
              variant="h5"
              sx={{marginBottom:4,marginTop:3}}>
                {video.description}
              </Typography>
              </CardContent>  
              </Container>
              </Card>
            </Container>
          ))}

</Container>}
</div>

    )
}
export default ViewSub