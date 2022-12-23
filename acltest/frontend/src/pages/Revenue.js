import { useEffect, useState } from "react";
import {Typography } from '@mui/material';
import Card from '@mui/material/Card';
import InstructorBar from "../components/InstructorBar";


const Revenue = () => {
const [revenue,setRevenue] = useState(null) ; 
useEffect(() => {
 const getmoney= async ()=>{
      
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId)
    const response = await fetch(`/api/instructors/getpay?userId=${userId}`);
    const revenues = await response.json();
    console.log(revenues)
    setRevenue(revenues)

 }

 getmoney()
},[]);

    return (
    <div className="wallet">
      <InstructorBar x={5}/>
       <Card
       sx={{height:580,marginTop:6}}>
   <Typography
   variant="h3"
   align="center"
   gutterBottom
   sx={{
     marginTop:10
  }}
   >
  <p>This Month's Revenue</p> 
   </Typography>
   <Typography
   variant="h5"
   align="center"
   sx={{
    marginTop:20
 }}
   >
  <p> Total Amount  : {revenue}</p> 
   </Typography>
   </Card>
    </div>
  );
};

export default Revenue;