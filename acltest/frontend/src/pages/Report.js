import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { brown } from '@mui/material/colors';
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthContext } from "../hooks/useAuthContext";

const Report = () => {
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseId");
  const userid = params.get("userId")
  const [reason, setReason] = useState('')
  const [details, setDetails] = useState('')
  const [reasonerror, setReasonerror] = useState(false)
  const [detailserror, setDetailserror] = useState(false)
  const [open, setOpen] = useState(false);
  const { user } =  useAuthContext();

  const [state, setState] = useState({
    Financial: false,
    Technical: false,
    Other: false,
  });
  const { Financial, Technical, Other } = state;
  const handleChange1 = (e) => {
    setState(
      { Financial: true, Technical: false, Other: false }

    );
  };

  const handleChange2 = (e) => {
    setState(
      { Financial: false, Technical: true, Other: false }

    );
  };

  const handleChange3 = (e) => {
    setState(
      { Financial: false, Technical: false, Other: true }

    );
  };

  const submitreport = async (e) => {
    e.preventDefault();
    setDetailserror(false)
    setReasonerror(false)
    if (reason == "") {
      setReasonerror(true)
    }
    if (details == "") {
      setDetailserror(true)
    }
    if (reason && details) {
      console.log(reason, details, "here")
      const payload = { reason, details }
      const response = await fetch(`/api/trainees/reportproblem?courseid=${courseid}&&userid=${userid}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
              'Authorization': `Bearer ${user.token}`
        },

      });

      const json = await response.json()
      if (response.ok) {
        setDetails("")
        setReason('')
        setOpen(true)

        console.log('new report added:', json)
      }
    }
  }


  return (

    <div>
      <Card
        sx={{ marginTop: 6 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            marginTop: 4
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

           
        

        <FormControl >   <FormLabel sx={{ fontSize: 20, marginLeft: 10 }}> Please Pick A Reason : </FormLabel>
          <FormGroup sx={{ marginLeft: 10, marginTop: 4 }} value={reason} onChange={(e) => setReason(e.target.value)}>
            <FormControlLabel onChange={handleChange1} checked={Financial} value="Financial" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, color: brown[600] }} />} name="Financial" label="Financial" />
            <FormControlLabel onChange={handleChange2} checked={Technical} value="Technical" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, color: brown[600] }} />} name="Technical" label="Technical" />
            <FormControlLabel onChange={handleChange3} checked={Other} value="Other" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, color: brown[600] }} />} name="Other" label="Other" />
          </FormGroup>
        </FormControl>
          {/* error part */}
        { reasonerror &&<Typography
        sx={{fontSize:20,marginLeft:6,marginTop:2,color:"red"}}
        >
            You have to pick a Reason to submit the form
            </Typography>
            }
       
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          variant='outlined'
          noValidate
          autoComplete='off'
          label=" Report Details "
          
          required
          multiline
          fullWidth
          rows={12}
          error={detailserror}
          sx={{
            marginTop: 5, marginBottom: 5, display: "block", color: brown[600], width: '110ch', marginLeft: 20, marginRight: 20
          }}


        />

{ detailserror &&<Typography
        sx={{fontSize:20,marginLeft:50,color:"red"}}
        >
            You have to specify the details to submit the report
            </Typography>
            }
       

       <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
       severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setOpen(false);
              }}
            >
              
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle fontSize={20}>Success</AlertTitle>
        <strong >Report Added Succefully</strong>  
        </Alert>
      </Collapse>
      
    </Box>
        <Button
          variant='outlined'
          onClick={submitreport}
          sx={{
            marginBottom: 6, marginLeft:135, fontSize: 20, marginTop:5
          }}
        >Submit Report</Button>

      </Card>
    </div>
  )

}
export default Report