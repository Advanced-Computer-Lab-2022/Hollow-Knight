import { Card, Typography } from '@mui/material';
import React from "react";
import Rating from '@mui/material/Rating';
import { padding } from '@mui/system';


const RatingCard = ({ data }) => {
    console.log(data)




    return (
        <div>
            <Card 
             sx={{   marginBottom:5,marginLeft:6}}>
                <Typography
                 sx={{  fontSize:20, marginLeft:4 , marginBottom:5,marginTop:3}}
                 >
               
                  <p>Rating : {data.rating} 
                  < Rating name="read-only" value={data.rating} precision={0.5} readOnly 
            sx={{ fontSize:30, marginLeft:8,marginTop:2}}/> 
            </p> 
           
                  <p>Review : {data.reviews}</p>

                </Typography>
                
            </Card>
        </div>

    )
};
export default RatingCard