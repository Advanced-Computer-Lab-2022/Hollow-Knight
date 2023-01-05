import { useState } from "react";
import Question from "./Question"
import { useAuthContext } from "../hooks/useAuthContext";
import { Container,Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import { Card,  Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

//import DisplayQuestions from "./DisplayQuestions";
export let problems = []
const AddExercises = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [maxGrade, setMaxGrade] = useState(0);
  const [q1, setQ1] = useState(null)
  const [display, setDisplay] = useState(false)
  const [success, setSuccess] = useState(false)

  const { user } = useAuthContext();



  var exercise;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const params = new URLSearchParams(window.location.search);
    // const userId = params.get("subtitleId");
    // console.log(subtitleId);
    console.log(problems);
    exercise = {
      title: title,
      maxGrade: maxGrade,
      problems: problems,
    };
    //console.log(exercise);
    //console.log(problems)
    const params = new URLSearchParams(window.location.search);
    const subtitleId = params.get('subtitleId');
    const response = await fetch(`/api/instructors/addexercise?subtitleId=${subtitleId}`, {
      method: "PATCH",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });
    problems = []
    // setAnswers(null);
    if (response.ok) {
      setTitle("")
      setMaxGrade("")
      setSuccess(true)

    }


   
  };




  return (
    <Container>
      <Typography variant='h3' align='center' sx={{ marginBottom: 10, marginTop: 4 }}>Exercise</Typography>
      <form className="addExercise" >




        <Card
          sx={{ marginTop: 7, borderRadius: 8 }}>
          <Container
            sx={{ marginLeft: 16 }}
          >

            <TextField
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
              color="primary"
              type="text"
              value={title}
              fullWidth

              sx={{
                "& > :not(style)": { marginBottom: 6, marginTop: 12, width: 600,marginLeft:16 },
              }}
            />


            <TextField
              onChange={(e) => setMaxGrade(e.target.value)}
              label="Maximum Grade"
              variant="outlined"
              color="primary"
              type="number"
              value={maxGrade}
              fullWidth

              sx={{
                "& > :not(style)": { marginBottom: 8, marginTop: 4, width: 600,marginLeft:16 },
              }}
            />





          </Container>
    




        {<Question />}



        <Box

sx={{ width: 700 ,marginLeft:30}}>


<Collapse in={success}>
    <Alert
        severity="success"
        action={
            <IconButton
                aria-label="close"
                color="inherit"
                size="large"
                onClick={() => {
                    setSuccess(false);
                }}
            >

                <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        sx={{ mb: 2 }}
    >
        <AlertTitle fontSize={20}>Success</AlertTitle>
        <strong > Exercise Has been Added to the course content   </strong>
    </Alert>
</Collapse>
</Box>



        <Button
              sx={{ marginBottom: 7, marginLeft: 60 ,marginTop:10}}
              onClick={handleSubmit}
              variant="contained"
              type="submit"
            >Submit Exercise</Button>

        </Card>


   

      </form>

    </Container>
  );
};

export default AddExercises;

