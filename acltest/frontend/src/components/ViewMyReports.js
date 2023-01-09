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

const ViewMyReports = () => {
    const [buttoncheck, setButtonCheck] = useState(false) 
    const [reports, setReports] = useState(null);
    const [comment, setComment] = useState("");
    const [selectedreportid, setSelectedreportid] = useState(null)
    const { user } =  useAuthContext();
    useEffect(() => {
      const viewreports = async () => {
        if(user){
        const response = await fetch("/api/trainees/viewmyreports",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
  
  
          }
      })
      const json = await response.json();
  
      if (response.ok) {
        setReports(json);
      }}
      if(!user){
        console.log("no user omg")
      };
      };
    
        viewreports();
      }, [user,buttoncheck]);
    
      const resolved = async (report) => {
        const response = await fetch(`/api/admins/resolvereport?reportId=${report._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
      }})
      if(response.ok){
        console.log("success!")
        window.location.reload()
      }
      }

      const pending = async (report) => {
        window.location.reload()
        const response = await fetch(`/api/admins/pendreport?reportId=${selectedreportid}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
      }})
      if(response.ok){
        console.log("success!")
        window.location.reload()
      }
      }

      const addcomment = async (report) => {
       setButtonCheck(true)
       setSelectedreportid(report._id)
      }

      const commentadder = async (e) => {
        console.log(comment)
        console.log(selectedreportid)
        e.preventDefault()
        const reedsponse = await fetch(`/api/trainees/addcomment?reportId=${selectedreportid}`,
        {
          method: 'POST',
          body: JSON.stringify({
            comment: comment,
          }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
  
  
          }
      })
      if(reedsponse.ok){
        window.location.reload()
      }
       }

    
    return(
        <div className="ViewReports">

<h5> Your Reports </h5> 
<div className="ViewReports" style={{display: "flex"}}>

{reports && reports.map((report)=>(

        
<div  key={report._id}> 

<Box sx={{ maxWidth: 220 }}>
<Card variant="outlined">                      
<React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Report Info
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Submitted Against course {report.coursetitle}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Reason: {report.reason}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Status: {report.status}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      comments: {report.comments}
      </Typography>
      <Typography variant="body2">
        Click the button below to add a comment
        <br />
      </Typography>
    </CardContent>
    <CardActions>
    <Button onClick={() => addcomment(report)}>Add comment</Button>
    </CardActions>
  </React.Fragment> 
  </Card>
  </Box>                            
</div>
))}

                 

</div>
{buttoncheck && <form className="get grade" onSubmit={commentadder}>
      <h3>Your comment:</h3>
      <input
        onChange={(e) => setComment(e.target.value)}
        value={comment}

        />
         <Button variant="contained">Modify Comment</Button>
        </form>}
                  
 </div>
    )
}

export default ViewMyReports