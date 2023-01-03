import { useState } from "react";
import Question from "./Question"
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import { Card,  Typography, Button } from '@mui/material';

//import DisplayQuestions from "./DisplayQuestions";
export let problems = []
const AddExercises = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [maxGrade, setMaxGrade] = useState(0);
  const [q1, setQ1] = useState(null)
  const [display, setDisplay] = useState(false)
  const { user } = useAuthContext();


  const [submitMessage, setSubmitMessage] = useState("");
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

    }


    setSubmitMessage("Submitted");
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





        <Button
              sx={{ marginBottom: 7, marginLeft: 60 ,marginTop:10}}
              onClick={handleSubmit}
              variant="contained"
              type="submit"
            >Submit Exercise</Button>

        </Card>


        <h1>{submitMessage}</h1>


      </form>

    </Container>
  );
};

export default AddExercises;

