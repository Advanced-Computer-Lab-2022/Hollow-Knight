import { useAuthContext } from "../hooks/useAuthContext";

import { useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
const { useState } = require("react");

const ViewMyCourses = () => {
  const [courses, setCourses] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const viewCourses = async () => {

      if (user) {
        const response = await fetch(
          `/api/instructors/viewmycourses`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }

        }
        );
        const result = await response.json();

        if (response.ok) {
          setCourses(result);
          console.log(result);
        }
      };
    }
    viewCourses();
  }, [user]);
  return (
    <div className="courses">
    
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
             <Card sx={{marginBottom:8,marginTop:4 ,borderRadius:8}}>
              <Container  sx={{marginTop:5,marginBottom:5}}>
            <Typography  sx={{fontSize:25,marginBottom:3}}>
              <strong>Course Title:</strong>
              {course.title} &nbsp;&nbsp;
              </Typography>

              <Typography  sx={{fontSize:25,marginBottom:3}} >
              <strong>Price:</strong>
              {course.price} &nbsp;&nbsp;
              </Typography>

              <Typography   sx={{fontSize:25,marginBottom:5}} >
              <strong>Available Discounts : </strong>
              {course.discount.percent}  % &nbsp;&nbsp;
            </Typography>
            <Button
            
            sx={{marginRight:5}}
              variant="outlined"
              onClick={() =>
                (window.location.href = `/applydiscount?courseId=${course._id}`)
              }
            
            >
              Apply Discount
            </Button>
            <Button
            sx={{marginRight:5}}
              variant="outlined"
              onClick={() =>
                (window.location.href = `/viewsubtitles?courseId=${course._id}`)
              }
           
            >
              View Subtitles
            </Button>

            <Button variant="outlined"
              onClick={() =>
                (window.location.href = `/report?courseId=${course._id}`)
              }
            >
              Report
            </Button></Container>
            </Card >
          </div>
        ))}
            
    </div>
  );
};

export default ViewMyCourses;
