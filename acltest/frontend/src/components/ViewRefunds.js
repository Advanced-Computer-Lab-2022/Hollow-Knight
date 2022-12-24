import {useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuthContext } from "../hooks/useAuthContext";

const {useState} = require("react");

const ViewRefunds = () => {
    const [refunds, setRefunds] = useState(null);
    const { user } =  useAuthContext();
    useEffect(() => {
      const viewrefunds = async () => {
        if(user){
        const response = await fetch("/api/admins/refunds",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
  
  
          }
      })
      const json = await response.json();
  
      if (response.ok) {
        setRefunds(json);
      }}
      if(!user){
        console.log("no user omg")
      };
      };
    
        viewrefunds();
      }, []);
    
      const accepted = async (refund) => {
        const response = await fetch(`/api/admins/addfunds?refundId=${refund._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
      }})
      if(response.ok){
        console.log("success!")
        window.location.reload()
      }
      }

      const reject = async (refund) => {
        const response = await fetch(`/api/admins/denyfunds?refundId=${refund._id}`, {
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
        <div className="ViewRefunds">

<h5> Available Refunds </h5> 
    
<div className="ViewRefunds" style={{display: "flex"}}>

{refunds && refunds.map((refund)=>(
        
<div  key={refund._id}>
<Box sx={{ maxWidth: 300 }}>
<Card variant="outlined">                      
<React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Course Request 
      </Typography>
      <Typography variant="h5" component="div">
      submitted by {refund.traineemail}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      requesting access for {refund.coursetitle}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Price of refund: {refund.courseprice}
      </Typography>
      <Typography variant="body2">
        Click the button below to verify refund
        <br />
      </Typography>
    </CardContent>
    <CardActions>
    <Button onClick={() => accepted(refund)}>Return Refund</Button>    <Button onClick={() => reject(refund)}>Reject Refund</Button>
    </CardActions>
  </React.Fragment> 
  </Card>
  </Box>                            
</div>
))}
                 

</div>
                  
 </div>
    )
}

export default ViewRefunds