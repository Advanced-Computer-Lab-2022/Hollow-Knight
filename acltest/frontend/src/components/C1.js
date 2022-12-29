import { useState, useEffect, useMemo } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Typography } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/system";
import Select from "react-select";
import Link from '@mui/material/Link';
//import { Select } from '@mui/material';
import countryList from "react-select-country-list";
import SelectInput from "@mui/material/Select/SelectInput";
const C1 = () => {

  const [open, setOpen] = useState(false)
  const [instructors, setInstructors] = useState(null)
  const [check, setCheck] = useState(false)
  const [userinfo, setUserinfo] = useState(null)
  const { user } = useAuthContext();
  const [first_name, setFirst_name] = useState(null)
  const [last_name, setLast_name] = useState(null)
  const [biography, setBiography] = useState(null)
  const [email, setEmail] = useState(null)
  const [country, setCountry] = useState("");
  const [countryAbb, setCountryAbb] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState("");

  console.log(user, "hi")

  const changeHandler = (value) => {
    setValue(value);
    setCountry(value.label);
    setCountryAbb(value.value);
  };


  useEffect(() => {

    const handle = async () => {


      if (user) {




        //e.preventDefault()
        const response = await fetch(`/api/instructors/getinst`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`


            }
          });

        const json = await response.json()
        //console.log(json)
        if (!response.ok) {
          console.log("error")

        }
        setInstructors(json)
      }
    }

    handle()





  }, [user])

  useEffect(() => {


    const getuser = async () => {
      if (instructors) {
        console.log("hi")

        var insid = instructors._id
        console.log(insid)
        const response = await fetch(`/api/instructors/getname?authorid=${insid}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            }
          });

        const json = await response.json()
        //console.log(json)
        if (!response.ok) {
          console.log("error")

        }
        console.log(json)
        setUserinfo(json)


      }
    }
    getuser()
  }, [instructors])


  const handleUpdate = async (e) => {

    console.log(first_name, last_name, biography, email)
    e.preventDefault()

    const instructor = { first_name, last_name, email, biography, country, countryAbb }

    const response = await fetch('/api/instructors/updateinfo', {
      method: 'POST',
      body: JSON.stringify(instructor),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }

    })
    const man = await response.json()
    if (response.ok) {

      console.log('instructor changed', man)

    }

  }

  const handleAccept = async (e) => {
    const Status = "Accepted"
    const percent = instructors.contract.percent
    const acc = { Status, percent }
    e.preventDefault()
    const response = await fetch(`/api/instructors/updatecontract`, {
      method: 'PATCH',
      body: JSON.stringify(acc),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    console.log("here")
    if (!response.ok) {
      console.log("error")
    }
    console.log("here")
    console.log(json)
    setOpen(false);
    setCheck(true)
  };

  const handleReject = async (e) => {
    const Status = "Rejected"
    const percent = instructors.contract.percent
    const acc = { Status, percent }
    e.preventDefault()
    const response = await fetch(`/api/instructors/updatecontract`, {
      method: 'PATCH',
      body: JSON.stringify(acc),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    console.log("here")
    if (!response.ok) {
      console.log("error")
    }
    console.log("here")
    console.log(json)
    setOpen(false);
    setCheck(true)
  };




  if (instructors) {

    if (instructors.contract.Status == "Pending" && !check) {
      console.log("go")
      console.log(open)
      console.log(instructors.contract)
      if (!open) {
        console.log("hi")
        setOpen(true)

      }

    }
  }


  return (
    <Container>
               <Typography align="center" variant="h3" marginBottom={8} >Profile</Typography>
      {instructors && userinfo && <Container>

        <TextField
          sx={{ marginBottom: 4 }}
          label="First Name"
          variant="outlined"
          defaultValue={userinfo.first_name}
          value={first_name}
          fullWidth
          onChange={(e) => setFirst_name(e.target.value)}
        />

        <TextField
          sx={{ marginBottom: 4 }}
          label="Last Name"
          value={last_name}
          variant="outlined"
          defaultValue={userinfo.last_name}
          onChange={(e) => setLast_name(e.target.value)}
          fullWidth
        />


        <TextField
          sx={{ marginBottom: 4 }}
          label="Email"
          variant="outlined"
          defaultValue={userinfo.email}
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          sx={{ marginBottom: 4 }}
          label="Biograpghy"
          multiline
          rows={5}
          variant="outlined"
          defaultValue={instructors.biography}
          value={biography}
          fullWidth
          onChange={(e) => setBiography(e.target.value)}
        />

        <Select  options={options} value={value} onChange={changeHandler}    />



        {instructors.contract.Status =="Rejected" &&<Container
        sx={{marginTop:4}}>
        <Typography
            variant="h5"
            marginBottom={2}
       >
        Contract Status : {instructors.contract.Status} 
        
        </Typography>
        <Typography
            variant="body1"
            marginBottom={2}
       >
        To Start Adding Courses Accept Your Contract
        
        </Typography>
        <Button variant="contained" onClick={handleAccept}>Accept Contract</Button> 
        </Container> }
    

        <Container
        sx={{marginTop:6}}>
        <Link
        href="/resetpassword">
        Reset Password
        </Link> 
        </Container> 
    

        <Button
          onClick={handleUpdate}
          sx={{ marginLeft: 120 ,marginTop:4}}
          variant="contained">Save Changes</Button>

      </Container>
      }
      {instructors && <Dialog
        open={open}

        keepMounted
        onClose={handleReject}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Contract Agreement"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{<div>

            <p>

              <Typography sx={{ fontSize: 20, marginBottom: 2 }}> This contract is to state that you have agreed to give our company Exclusive Rights to all your Courses added to our platform, including But not limiited to, all videos created by you regarding the course content and other materials including :
                Exercises , Exams and  their respictive solutions.</Typography>


              <Typography sx={{ fontSize: 20, marginBottom: 2 }} >And  Also that company is set to taken in {100 - instructors.contract.percent}% of the Profit generated by each course , for each registartion to the
                course by a user.
              </Typography>
              <Typography sx={{ fontSize: 20, marginBottom: 2 }}   > Note : You can't add any courses until you agree to this contract</Typography>




            </p></div>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReject}>Disagree</Button>
          <Button onClick={handleAccept}>Agree</Button>
        </DialogActions>
      </Dialog>}
    </Container>
  )
}
export default C1;