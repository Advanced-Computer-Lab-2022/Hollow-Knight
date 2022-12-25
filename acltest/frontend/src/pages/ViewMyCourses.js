import { useAuthContext } from "../hooks/useAuthContext";
import InstructorBar from "../components/InstructorBar";
import { useEffect } from "react";
import { Button } from "@mui/material";
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
      <InstructorBar x={1} />
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
            <p>
              <strong>Course Title:</strong>
              {course.title} &nbsp;&nbsp;
              <strong>Price:</strong>
              {course.price} &nbsp;&nbsp;
              <strong>Percent:</strong>
              {course.discount.percent} &nbsp;&nbsp;
            </p>
            <button
              variant="contained"
              onClick={() =>
                (window.location.href = `/applydiscount?courseId=${course._id}`)
              }
              key={course._id}
              margin="normal"
              padding="normal"
            >
              Apply Discount
            </button>
            <button
              variant="contained"
              onClick={() =>
                (window.location.href = `/viewsubtitles?courseId=${course._id}`)
              }
              key={course._id}
              margin="normal"
              padding="normal"
            >
              View Subtitles
            </button>

            <Button variant="outlined"
              onClick={() =>
                (window.location.href = `/report?courseId=${course._id}`)
              }
            >
              Report
            </Button>
          </div>
        ))}
    </div>
  );
};

export default ViewMyCourses;
