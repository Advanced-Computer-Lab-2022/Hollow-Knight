import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button,Card,Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthContext } from "../hooks/useAuthContext";

const Courseform =()=>{
  const { user } =  useAuthContext();
   const [title,setTitle]=useState('')
   const [price,setPrice]=useState('')
   const [subject,setSubject]=useState('')

   const [summary,setSummary]=useState('')
 
   const [total_hours,setTotal_hours]=useState('')

   const [error,setError]=useState(null)
   const [success,setSuccess]=useState(false)

   const [titleerror,setTitleerror]=useState(false)
   const [priceerror,setPriceerror]=useState(false)
   const [summaryerror,setSummaryerror]=useState(false)

   const handleSubmit = async (e) => {
    e.preventDefault()
    setTitleerror(false)
    setPriceerror(false)
    setSummaryerror(false)
  
    const course = {title,price,subject,summary,total_hours}
   
    if(title=="")
    {
       setTitleerror(true)
    }
    if(price=="")
    {
      setPriceerror(true)
    }
    if(summary=="")
    {
      setSummaryerror(true)
    }
    if(title&&price&&summary){
    const response = await fetch(`/api/instructors/addcourse`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setPrice('')
      setSubject('')
      setSummary('')
      setTotal_hours('')
      setSuccess(true)
      console.log(title,price,summary)
      console.log('new course added:', json)
    }
   }}
 return(
  <Card sx={{marginTop:2,borderRadius:5}}
  >
     <Typography
        
        sx={{ fontSize:35,marginBottom:7,marginTop:3,textAlign:"center"}}
        >
            Add A New Course
        </Typography>
    <Container sx={{marginLeft:40}}>
        <form autoComplete='off' className="create" onSubmit={handleSubmit} noValidate>
       

        <Typography>Course Title : </Typography> <Typography marginTop={-3} marginLeft={13} sx={{color: "red",}} > (required) </Typography>
        
        <TextField
              onChange={(e)=> setTitle(e.target.value)}
              label ="Course Title"
              variant='outlined'
              color='primary'
              type="text"
              fullWidth
              required
              error={titleerror}
              value={title}
              sx={{
                '& > :not(style)': { marginBottom:3,marginTop:1,width:600},
              }}
              />


        <Typography >Price : </Typography> <Typography marginTop={-3} marginLeft={7} sx={{color: "red",}} > (required) </Typography>

        
        <TextField
              onChange={(e)=> setPrice(e.target.value)}
              label ="Price "
              variant='outlined'
              color='primary'
              type="number"
              fullWidth
              required
              error={priceerror}
              value={price}
              sx={{
                '& > :not(style)': { marginBottom:3,marginTop:1,width:600},
              }}
              />
       
      <Typography>Subject :</Typography>
      
           <TextField
              onChange={(e)=> setSubject(e.target.value)}
              label ="Subject "
              variant='outlined'
              color='primary'
              type="text"
              fullWidth
              value={subject}
              sx={{
                '& > :not(style)': { marginBottom:3,marginTop:1,width:600},
              }}
              />

      
         <Typography>Summary : </Typography>  <Typography marginTop={-3} marginLeft={11} sx={{color: "red",}} > (required) </Typography>

         <TextField
              onChange={(e)=> setSummary(e.target.value)}
              label ="Summary"
              variant='outlined'
              color='primary'
              type="text"
              fullWidth
              required              
              error={summaryerror}
              value={summary}
              sx={{
                '& > :not(style)': { marginBottom:3,marginTop:1,width:600},
              }}
              />
       
    
        <Typography>Total Hours : </Typography>
        
        <TextField
              onChange={(e)=> setTotal_hours(e.target.value)}
              label ="Total Hours"
              variant='outlined'
              color='primary'
              type="number"
              fullWidth
              value={total_hours}
              sx={{
                '& > :not(style)': { marginBottom:5,marginTop:1,width:600},
              }}
              />
      

        <Button
        type="submit"
        variant="contained"
        sx={{marginBottom:5,marginLeft:65}}
        >Add Course</Button>
       
      
    </form>
    
    <Box sx={{ width: '100%' ,width:800}}>
      <Collapse in={error}>
        <Alert
       severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setError(false);
              }}
            >
              
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle fontSize={20}>Error</AlertTitle>
        <strong >You can't add a course, before you accepted your contract </strong>  
        </Alert>
      </Collapse>

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
        <strong >Course has been Added Succefully   </strong>  
        </Alert>
      </Collapse>
      </Box>
    </Container>
    </Card>

 )

}

export default Courseform 