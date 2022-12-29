import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";

const ViewCourses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="courses">
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
            <p>
            <Card sx={{marginBottom:8,marginTop:4 ,borderRadius:8}}>
            <Container  sx={{marginTop:5,marginBottom:5,marginLeft:70}}>
            <Typography  sx={{fontSize:32,marginBottom:3}}>
              <strong>{course.title}</strong>
               &nbsp;&nbsp;
              </Typography>

              <Typography  sx={{fontSize:25,marginBottom:3}}>
              Total Hours : {course.total_hours} &nbsp;&nbsp;
              </Typography>
              
              <Typography  sx={{fontSize:25,marginBottom:3}}>
              Rating : {course.overallRating}
              </Typography>
              </Container>
              </Card>
            </p>
          </div>
        ))}
    </div>
  );
};
export default ViewCourses;
