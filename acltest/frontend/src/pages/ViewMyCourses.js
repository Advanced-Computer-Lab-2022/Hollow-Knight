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
    <Container className="courses">
    <Typography variant="h3"align="center"sx={{marginBottom:12,marginTop:6}}>Your Courses</Typography>
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
             <Card sx={{marginBottom:8,marginTop:4 ,borderRadius:8}}>
              <Container  sx={{marginTop:5,marginBottom:5}}>
            <Typography align="center"  sx={{fontSize:35,marginBottom:3}}>
              <strong> {course.title} </strong>
             &nbsp;&nbsp;
              </Typography>

              <Typography align="center" sx={{fontSize:25,marginBottom:3}} >
              Price : {course.price} &nbsp;&nbsp;
              </Typography>

              <Typography align="center"  sx={{fontSize:25,marginBottom:8}} >
              Existing  Discounts : {course.discount.percent}  % &nbsp;&nbsp;
            </Typography>
            <Button
            
            sx={{marginRight:5,marginLeft:35}}
              variant="contained"
              onClick={() =>
                (window.location.href = `/applydiscount?courseId=${course._id}`)
              }
            
            >
              Apply Discount
            </Button>
            <Button
            sx={{marginRight:5}}
              variant="contained"
              onClick={() =>
                (window.location.href = `/viewsubtitles?courseId=${course._id}`)
              }
           
            >
              View Subtitles
            </Button>

            <Button variant="contained"
              onClick={() =>
                (window.location.href = `/report?courseId=${course._id}`)
              }
            >
              Report
            </Button></Container>
            </Card >
          </div>
        ))}
            
    </Container>
  );
};

export default ViewMyCourses;
