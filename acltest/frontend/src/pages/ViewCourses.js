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
            <Container  sx={{marginTop:5,marginBottom:5}}>
            <Typography  sx={{fontSize:25,marginBottom:3}}>
              <strong>Course Title:</strong>
              {course.title} &nbsp;&nbsp;
              </Typography>

              <Typography  sx={{fontSize:25,marginBottom:3}}>
              <strong>Total Hours:</strong>
              {course.total_hours} &nbsp;&nbsp;
              </Typography>
              
              <Typography  sx={{fontSize:25,marginBottom:3}}>
              <strong>Course Rating:</strong>
              {course.overallRating}
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
