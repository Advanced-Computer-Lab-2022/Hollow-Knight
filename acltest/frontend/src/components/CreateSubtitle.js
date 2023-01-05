import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const CreateSubtitle = () => {

  const [name, setName] = useState('')
  const [hour, setHour] = useState('')
  const [success, setSuccess] = useState(false)
  const { user } = useAuthContext();


  const subtitlemake = async (e) => {
    e.preventDefault()

    const sched = { name, hour }
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log(courseId)
    const response = await fetch(`/api/instructors/addsubtitle?courseId=${courseId}`, {
      method: 'POST',
      body: JSON.stringify(sched),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const result = await response.json()
    console.log(result)
    if (response.ok) {
      setName('')
      setHour('')
      setSuccess(true)
    }
  }
  return (

    <Container
      sx={{ marginTop: 7 }}
    >
      <Card sx={{ borderRadius: 5 }}>
        <form className="create" onSubmit={subtitlemake}>

          <Typography variant="h3" align="center" sx={{ marginBottom: 4, marginTop: 6 }}>
            Create Subtitle
          </Typography>
          <Box sx={{ marginLeft: 35, marginTop: 8, marginBottom: 6 }}>

            <Typography>Title: </Typography>


            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Title"
              variant='outlined'
              color='primary'
              type="text"
              fullWidth
              required

              value={name}
              sx={{
                '& > :not(style)': { marginBottom: 3, marginTop: 1, width: 600 },
              }}
            />


            <Typography sx={{ marginTop: 3 }}>Subtitle Hours: </Typography>
            <TextField
              onChange={(e) => setHour(e.target.value)}
              label="Subtitle Hours"
              variant='outlined'
              color='primary'
              type="number"
              fullWidth
              required
              value={hour}
              sx={{
                '& > :not(style)': { marginBottom: 3, marginTop: 1, width: 600 },
              }}
            />


            <Box

              sx={{ width: 590 }}>


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
                  <strong > Subtitle has been added to course   </strong>
                </Alert>
              </Collapse>
            </Box>


            <Button variant="contained" type="submit" sx={{ marginLeft: 55, marginTop: 6 }}>Create Subtitle</Button>
          </Box>
        </form>
      </Card>
    </Container>
  )

}

export default CreateSubtitle