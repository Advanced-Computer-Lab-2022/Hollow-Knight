import {useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const {useState} = require("react");

const ViewReports = () => {
    const [reports, setReports] = useState(null);
    useEffect(() => {
        const viewreports = async () => {
          const response = await fetch("/api/admins/reports");
          const json = await response.json();
    
          if (response.ok) {
            setReports(json);
          }
        };
    
        viewreports();
      }, []);
    
      const resolved = async (report) => {
        const response = await fetch(`/api/admins/resolvereport?reportId=${report._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
      }})
      if(response.ok){
        console.log("success!")
        window.location.reload()
      }
      }

      const pending = async (report) => {
        window.location.reload()
        const response = await fetch(`/api/admins/pendreport?reportId=${report._id}`, {
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
    

{reports && reports.map((report)=>(
        
<div  key={report._id}>
<Box sx={{ maxWidth: 220 }}>
<Card variant="outlined">                      
<React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Report Info
      </Typography>
      <Typography variant="h5" component="div">
      submitted by {report.traineemail}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Against course {report.coursetitle}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Reason: {report.reason}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Status: {report.status}
      </Typography>
      <Typography variant="body2">
        Click the button below to accept request
        <br />
      </Typography>
    </CardContent>
    <CardActions>
    <Button onClick={() => pending(report)}>Mark as pending</Button>    <Button onClick={() => resolved(report)}>Mark as resolved</Button>
    </CardActions>
  </React.Fragment> 
  </Card>
  </Box>                            
</div>
))}
                 


                  
 </div>
    )
}

export default ViewReports