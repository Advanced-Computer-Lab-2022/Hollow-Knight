import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Button, Card } from "@mui/material";
import { Container } from "@mui/system";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


const AddDiscount =()=>{
  const [start_date, setStart_date] =useState(null);
  const [end_date, setEnd_date] =useState(null);

   const [percent,setPercent]=useState('')

   const [startError, setStartError] =useState(false);
   const [endError, setEndError] =useState(false);
 
    const [percentError,setPercentError]=useState(false)
    const [success, setSuccess] = useState(false)


   const { user } =  useAuthContext();
   
   const handlestart = (newValue) => {
         var day =newValue.$d.getDate();
         var year =newValue.$d.getFullYear();
         var month =newValue.$d.getMonth();
         console.log(day,month,year)
        var date = new Date(year,month,day)
     
         console.log(date)
        setStart_date(date);
      
  };
  const handleend = (newValue) => {
    var day =newValue.$d.getDate();
    var year =newValue.$d.getFullYear();
    var month =newValue.$d.getMonth();
    console.log(day,month,year)
   var date = new Date(year,month,day)

    console.log(date)
   setEnd_date(date);
  };

   const discountgive = async (e) => {

    setPercentError(false)
    setStartError(false)
    setEndError(false)

    e.preventDefault()

    if(!percent)
    {
      setPercentError(true)
    }
    if(!start_date)
    {
      setStartError(true)
    }
    if(!end_date)
    {
      setEndError(true)
    }

if(percent && start_date && end_date){
    const disc = {percent,start_date,end_date}
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');

    
    const response = await fetch(`/api/instructors/applydiscount?courseId=${courseId}`, {
      method: 'PATCH',
      body: JSON.stringify(disc),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const result = await response.json()
    console.log(result)
    if (response.ok) {
    setEnd_date(null)
    setStart_date(null)
     setPercent("")
     setSuccess(true)
    }
  }


   }
 return(
  <Container>
  <Card sx={{borderRadius:10,marginTop:4}}>
     <Typography align="center"
        sx={{marginTop:4,marginBottom:5,fontSize:40}}>
            ADD Discount
        </Typography>
  <Container sx={{marginLeft:40}}>
    <form className="create" onSubmit={discountgive} noValidate>
       
       
      
           <TextField
                onChange={(e) => setPercent(e.target.value)}
                label=" Discount Percent "
                variant="outlined"
                color="primary"
                type="number"
                value={percent}
                fullWidth
                required
                error={percentError}
                
                sx={{
                  "& > :not(style)": { marginBottom:8,marginTop:4,width:500 },
                }}
              />

<Container >

<LocalizationProvider dateAdapter={AdapterDayjs}  >

<DesktopDatePicker sx={{spacing: 4}} 
  label="Start Date"
  inputFormat="MM/DD/YYYY"
  value={start_date}
  onChange={handlestart}
  renderInput={(params) => <TextField {...params} />}
/>
{startError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Choose A start Date
</Typography>

}

<Typography  variant="h5"  marginBottom={4} marginTop={4}> TO </Typography>

<DesktopDatePicker
  label="End Date"
  inputFormat="MM/DD/YYYY"
  value={end_date}
  onChange={handleend}
  
  renderInput={(params) => <TextField {...params} />}
/>
{endError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Choose A End Date
</Typography>

}
<Typography    > </Typography>


</LocalizationProvider>
</Container>

<Box 

sx={{  width: 400,marginTop:3}}>
               

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
                    <strong > Discount has been Added   </strong>
                  </Alert>
                </Collapse>
              </Box>

        <Button type="submit" variant="contained"  sx={{marginTop:4,fontSize:20 ,marginLeft:60,marginBottom:6}}>Apply Discount</Button>
       
      
    </form>
    </Container>
    </Card>
    </Container>
 )

}

export default AddDiscount