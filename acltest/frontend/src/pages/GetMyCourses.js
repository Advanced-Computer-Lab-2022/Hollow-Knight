import { Button } from "@mui/material";
import { useEffect, useState } from "react";
const ViewMyCourses = () => {
  const [courses, setCourses] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  console.log(userId);
  useState(() => {
    const fetchCourses = async () => {
      const response = await fetch(
        `/api/trainees/getmycourses?userId=${userId}`
      );
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
    console.log("here");
    console.log(courses);
  }, [userId, courses]);

  const requestrefund = async (course) => {
    const searching = { userId, course };
    const response = await fetch("/api/trainees/requestrefund", {
      method: "POST",
      body: JSON.stringify(searching),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (response.ok) {
      console.log("Request succesful");
    }
  };

  return (
    <div className="ViewMyCourses">
      <h1>My Courses</h1>
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
            <p>
              <strong>Course Title:</strong>
              {course.title} &nbsp;&nbsp;
              <strong>Progression:</strong>
              {course.traineeProgression}% &nbsp;&nbsp;
              <button
                onClick={() =>
                  (window.location.href = `coursecontent?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Go to Course
              </button>
              <button
                onClick={() =>
                  (window.location.href = `rateinstructor?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Rate Instructor
              </button>
              <button
                variant="contained"
                onClick={() =>
                  (window.location.href = `/ratecourse?courseId=${course._id}&&userId=${userId}`)
                }
                key={course._id}
                margin="normal"
                padding="normal"
              >
                Rate Course
              </button>
              {course.traineeProgression == 100 && (
                <button
                  onClick={() =>
                    (window.location.href = `coursecertificate?courseId=${course._id}&&userId=${userId}`)
                  }
                >
                  Get Certificate
                </button>
              )}
              <Button variant="outlined" onClick={() => requestrefund(course)}>
                Get A Refund
              </Button>
              <Button
                variant="outlined"
                onClick={() =>
                  (window.location.href = `/report?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Report Course
              </Button>
            </p>
          </div>
        ))}
    </div>
  );
};

export default ViewMyCourses;
