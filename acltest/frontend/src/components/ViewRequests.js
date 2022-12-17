import {useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const {useState} = require("react");

const ViewRequests = () => {
    const [requests, setRequests] = useState(null);
    useEffect(() => {
        const viewrequests = async () => {
          const response = await fetch("/api/admins/requests");
          const json = await response.json();
    
          if (response.ok) {
            setRequests(json);
          }
        };
    
        viewrequests();
      }, []);
    
      const accepted = async (request) => {
        const response = await fetch(`/api/admins/acceptrequest?requestId=${request._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
      }})
      if(response.ok){
        console.log("success!")
        window.location.reload()
      }
      }

      const reject = async (request) => {
        window.location.reload()
        const response = await fetch(`/api/admins/rejectrequest?requestId=${request._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
      }})
      if(response.ok){
        console.log("success!")
        window.location.reload()
      }
      }

    
    return(
        <div className="ViewRequests">

<h5> Available Requests </h5> 
    
  
{requests && requests.map((request)=>(
        
<div  key={request._id}>
<Card variant="outlined">                      
<React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Course Request 
      </Typography>
      <Typography variant="h5" component="div">
      submitted by {request.traineemail}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      requesting access for {request.coursetitle}
      </Typography>
      <Typography variant="body2">
        Click the button below to accept request
        <br />
      </Typography>
    </CardContent>
    <CardActions>
    <button onClick={() => accepted(request)}>Accept Request</button>    <button onClick={() => reject(request)}>Reject Request</button>
    </CardActions>
  </React.Fragment> 
  </Card>                                
</div>
))}
                 


                  
 </div>
    )
}

export default ViewRequests