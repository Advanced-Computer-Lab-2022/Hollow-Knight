import {Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { brown} from '@mui/material/colors';
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
const Report=()=>{
    const params = new URLSearchParams(window.location.search);
    const courseid = params.get("courseId");
    const userid =params.get("userId")
    const [reason,setReason]=useState('')
    const [details,setDetails]=useState('')
    const [state, setState] = useState({
        Financial: false,
        Technical : false,
        Other: false,
      });
      const { Financial, Technical, Other } = state;
      const handleChange1 = (e) => {
        setState(
        {Financial:true,Technical : false, Other: false}
          
        );
      };

      const handleChange2 = (e) => {
        setState(
        {Financial:false,Technical : true, Other: false}
          
        );
      };

      const handleChange3 = (e) => {
        setState(
        {Financial:false,Technical : false, Other: true}
          
        );
      };

    const submitreport = async (e) => {
        e.preventDefault();
        console.log(reason)
        const re={reason}
              const response = await fetch(`/api/trainees/reportproblem?courseid=${courseid}&&userid=${userid}`, {
            method: "POST",
            body: JSON.stringify(re),
            headers: {
              "Content-Type": "application/json",
            },
          
        });
    
        const json = await response.json()
        if (response.ok) {
            setDetails("")
            setReason('')
        
            console.log('new report added:', json)
          }
    }


return(

    <div>
 <Card
       sx={{marginTop:6}}>
   <Typography
   variant="h3"
   align="center"
   gutterBottom
   sx={{
     marginTop:4
  }}
   >
  <p>Report</p> 
   </Typography>
   <Typography
   variant="h5"
   align="center"
   sx={{
    
 }}
   >
  <p> Please Fill The Following Report : </p> 
   </Typography>
   <FormControl >   <FormLabel sx={{ fontSize: 20,marginLeft:10}}> Please Pick A Reason : </FormLabel> 
   <FormGroup sx={{marginLeft:10,marginTop:4}} value={reason} onChange={(e) => setReason(e.target.value)}>
      <FormControlLabel  onChange={handleChange1} checked={Financial} value="Financial" control={<Checkbox   sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } ,color: brown[600]}}/>} name="Financial" label="Financial" />
      <FormControlLabel  onChange={handleChange2} checked={Technical} value="Technical" control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 35 },color: brown[600] }}/>} name="Technical" label="Technical" />
      <FormControlLabel  onChange={handleChange3} checked={Other} value="Other"  control={<Checkbox      sx={{ '& .MuiSvgIcon-root': { fontSize: 35 },color: brown[600] }}/>} name="Other" label="Other" />
    </FormGroup>
    </FormControl>

<TextField
onChange={(e)=> setDetails(e.target.value)}
variant='outlined'
noValidate
autoComplete='off'
label=" Report Details "
required
multiline
fullWidth
rows={12}
sx={{
  marginTop:5,marginBottom:5,display:"block",color: brown[600], width: '110ch',marginLeft:20,marginRight:20
}}


/>

   <Button 
   variant='outlined'
   onClick={submitreport}
   sx={{
    marginBottom:4,marginLeft:10,fontSize:20
  }}
   >Submit Report</Button>
   </Card>
    </div>
)

}
export default Report