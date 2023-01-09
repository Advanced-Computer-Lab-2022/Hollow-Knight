import { useState, useEffect, useMemo } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Card, TextField, Typography } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/system";
import Select from "react-select";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
//import { Select } from '@mui/material';
import countryList from "react-select-country-list";

const TraineeProfile = () => {
    const [open, setOpen] = useState(false)
    const [instructors, setInstructors] = useState(null)
    const [check, setCheck] = useState(false)
    const [userinfo, setUserinfo] = useState(null)
    const { user } = useAuthContext();
    const [first_name, setFirst_name] = useState(null)
    const [last_name, setLast_name] = useState(null)
    const [email, setEmail] = useState(null)
    const [country, setCountry] = useState("");
    const [countryAbb, setCountryAbb] = useState("");
    const options = useMemo(() => countryList().getData(), []);
    const [value, setValue] = useState("");
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const changeHandler = (value) => {
        setValue(value);
        setCountry(value.label);
        setCountryAbb(value.value);
      };



      useEffect(()=>{
      const handle = async () => {


        if (user) {
  
          //e.preventDefault()
          const response = await fetch(`/api/trainees/updateinfo`,
            {
              method: 'POST',
              body:JSON.stringify({}),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              }
            });
  
          const json = await response.json()
  
          if (!response.ok) {
            console.log("error")
  
          }
          console.log(json)
          setInstructors(json)
          setUserinfo(json)
        }
      }
  
      handle()
  
    }, [user])

    const handleUpdate = async (e) => {
        
        e.preventDefault()

        const trainee = {first_name, last_name,email,country,countryAbb}

        const response = await fetch('/api/trainees/updateinfo', {
            method: 'POST',
            body: JSON.stringify(trainee),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }

        })
        const man = await response.json()
        if (!response.ok) {
            setError(man.error)
          }
        if (response.ok) {
        setSuccess(true)
        console.log('trainee changed', man)

        }

    }

    return (
        <Container>


        <Typography align="center" variant="h3" marginBottom={7} marginTop={4} >Profile</Typography>
        {instructors && userinfo && <Container
          sx={{ marginBottom: 4 }}
        >
  
          <Card
  
            sx={{ marginBottom: 9, borderRadius: 8 }}
          >
            <Container
              sx={{ marginLeft: 15 }}
            >
              <TextField
                sx={{ marginBottom: 4, marginTop: 14, width: 800 }}
                label="First Name"
                variant="outlined"
                defaultValue={userinfo.first_name}
                value={first_name}
                fullWidth
                onChange={(e) => setFirst_name(e.target.value)}
              />
  
              <TextField
                sx={{ marginBottom: 4, width: 800 }}
                label="Last Name"
                value={last_name}
                variant="outlined"
                defaultValue={userinfo.last_name}
                onChange={(e) => setLast_name(e.target.value)}
                fullWidth
              />
  
  
              <TextField
                sx={{ marginBottom: 4, width: 800 }}
                label="Email"
                variant="outlined"
                defaultValue={userinfo.email}
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />

              <Container sx={{ width: 850, marginLeft: -3, marginTop: 4, marginBottom: 4 }}>
                <Select options={options} value={value} onChange={changeHandler} />
              </Container>
  
  
  
              <Container
                sx={{ marginTop: 6 }}>
                <Link sx={{ fontSize: 20 }}
                  href="/resetpassword">
                  Reset Password
                </Link>
  
  
  
                <Box sx={{ width: '100%', width: 800, marginBottom:2,marginTop:3}}>
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
                      <strong > Try A Different Email, Email must be unique for users </strong>
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
                      <strong > Your Information has been Updated Succefully   </strong>
                    </Alert>
                  </Collapse>
                </Box>
  
              </Container>
  
  
              <Button
                onClick={handleUpdate}
  
                sx={{ marginLeft: 95, marginTop: 1, fontSize: 13, marginBottom: 5 }}
                variant="contained">Save Changes</Button>
            </Container>
          </Card>
        </Container>
  
        }
  
  
      </Container>
    )

}

export default TraineeProfile