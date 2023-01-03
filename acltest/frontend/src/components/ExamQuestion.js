import { useState } from "react";
import { Examproblems } from "./CreateExamComp"
import { Card, Grid, Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField';
const ExamQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [solution, setSolution] = useState("");
  const [bobo, setbobo] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(Examproblems)
    setAnswers([])
    answers.push(answer1);
    answers.push(answer2);
    answers.push(answer3);
    answers.push(answer4);
    //console.log(answer1)
    //console.log(answers)
    //console.log("hi")
    Examproblems.push({
      questions: question,
      answers: answers,
      solution: solution,
    });
    setbobo(Examproblems)
    console.log(Examproblems)
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setAnswer4("")
    setQuestion("")
    setSolution("")
    setAnswers([])


  }
  return (
    <div>

      <Container>
        <Grid container>
          <Grid

            item xs={6} xl={6}>

            {<Container
              sx={{ marginLeft: 3 }}
            >

              <TextField
                onChange={(e) => setQuestion(e.target.value)}
                label="Question"
                variant="outlined"
                color="primary"
                type="text"
                value={question}
                fullWidth
                multiline
                rows={3}

                sx={{
                  "& > :not(style)": { marginBottom: 6, marginTop: 10, width: 450 },
                }}
              />


              <TextField
                onChange={(e) => setAnswer1(e.target.value)}
                label=" Answer 1 "
                variant="outlined"
                color="primary"
                type="text"
                value={answer1}
                fullWidth

                sx={{
                  "& > :not(style)": { marginBottom: 1, marginTop: 2, width: 450 },
                }}
              />


              <TextField
                onChange={(e) => setAnswer2(e.target.value)}
                label=" Answer 2 "
                variant="outlined"
                color="primary"
                type="text"
                value={answer2}
                fullWidth

                sx={{
                  "& > :not(style)": { marginBottom: 1, marginTop: 1, width: 450 },
                }}
              />


              <TextField
                onChange={(e) => setAnswer3(e.target.value)}
                label=" Answer 3 "
                variant="outlined"
                color="primary"
                type="text"
                value={answer3}
                fullWidth

                sx={{
                  "& > :not(style)": { marginBottom: 1, marginTop: 1, width: 450 },
                }}
              />


              <TextField
                onChange={(e) => setAnswer4(e.target.value)}
                label=" Answer 4 "
                variant="outlined"
                color="primary"
                type="text"
                value={answer4}
                fullWidth

                sx={{
                  "& > :not(style)": { marginBottom: 4, marginTop: 1, width: 450 },
                }}
              />




              <TextField
                onChange={(e) => setSolution(e.target.value)}
                label=" Solution "
                variant="outlined"
                color="primary"
                type="text"
                value={solution}
                fullWidth

                sx={{
                  "& > :not(style)": { marginBottom: 4, marginTop: 4, width: 450 },
                }}
              />



              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                sx={{ marginTop: 3, marginBottom: 6, marginLeft: 35 }}
              >Insert Question</Button> </Container>}

          </Grid>

          <Grid

            item xs={6} xl={6}>

            <Typography
              sx={{ marginBottom: 3 }}
              variant="h3"
              align="center"
            >Problems</Typography>
            {bobo.map((Examproblems, index) => (
              <Container key={index}>
                <Card sx={{ marginBottom: 3, borderRadius: 5 }} variant="elevation" color="secondary"  >
                  <Container sx={{ marginBottom: 3 }}>
                    <Typography align="center"
                      variant="h5"
                      sx={{ marginBottom: 2, fontSize: 29, marginTop: 3 }}
                    >Q{index} : {Examproblems.questions}</Typography>
                    <Stack spacing={3}>

                      <Grid container>
                        <Grid xs={6} xl={6}
                        >
                          <Typography
                            align="center"
                            sx={{ fontSize: 22 }}
                          >A : {Examproblems.answers[0]} </Typography>
                        </Grid>
                        <Grid xs={6} xl={6}
                        >
                          <Typography
                            align="center"
                            sx={{ fontSize: 22 }}
                          >B : {Examproblems.answers[1]}</Typography>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs={6} xl={6}
                        >

                          <Typography
                            align="center"
                            sx={{ fontSize: 22 }}
                          >C : {Examproblems.answers[2]}</Typography>
                        </Grid>
                        <Grid xs={6} xl={6}
                        >
                          <Typography
                            align="center"
                            sx={{ fontSize: 22 }}
                          >D : {Examproblems.answers[3]}</Typography>
                        </Grid>
                      </Grid>

                      <Typography
                        align="center"
                        sx={{ fontSize: 22 }}
                      >Solution : {Examproblems.solution}</Typography>
                    </Stack>
                  </Container>
                </Card>
              </Container>
            ))}


          </Grid>
        </Grid>
      </Container>

    </div>)
}
export default ExamQuestion