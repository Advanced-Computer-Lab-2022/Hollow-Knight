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


const AddDiscount =()=>{
  const [start_date, setStart_date] =useState(null);
  const [end_date, setEnd_date] =useState(null);

   const [percent,setPercent]=useState('')

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
    e.preventDefault()

    const disc = {percent,start_date,end_date}
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log(courseId)
    console.log(disc)
    
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

    }
    
   }
 return(
  <Card sx={{borderRadius:10,marginTop:4}}>
     <Typography align="center"
        sx={{marginTop:4,marginBottom:5,fontSize:40}}>
            ADD Discount
        </Typography>
  <Container sx={{marginLeft:58}}>
    <form className="create" onSubmit={discountgive}>
       
       
      
           <TextField
                onChange={(e) => setPercent(e.target.value)}
                label="Percent"
                variant="outlined"
                color="primary"
                type="number"
                value={percent}
                fullWidth
                required
                sx={{
                  "& > :not(style)": { marginBottom:8,marginTop:4,width:500 },
                }}
              />


<LocalizationProvider dateAdapter={AdapterDayjs}  >

<DesktopDatePicker sx={{spacing: 4}} 
  label="Start Date"
  inputFormat="MM/DD/YYYY"
  value={start_date}
  onChange={handlestart}
  renderInput={(params) => <TextField {...params} />}
/>

<Typography  variant="h5"  marginBottom={4} marginTop={4}> TO </Typography>
<DesktopDatePicker
  label="End Date"
  inputFormat="MM/DD/YYYY"
  value={end_date}
  onChange={handleend}
  sx={{marginTop:-5}}
  renderInput={(params) => <TextField {...params} />}
/>



</LocalizationProvider>

        <Button type="submit" variant="contained"  sx={{marginTop:15,fontSize:20 ,marginLeft:40,marginBottom:6}}>Apply Discount</Button>
       
      
    </form>
    </Container>
    </Card>
 )

}

export default AddDiscount