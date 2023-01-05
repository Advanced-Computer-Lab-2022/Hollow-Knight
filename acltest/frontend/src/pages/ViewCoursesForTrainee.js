import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const ViewCoursesForTrainee = () => {
  const [courses, setCourses] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const { user } = useAuthContext();
  console.log(userId);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
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
              <strong>Course Title:</strong>
              {course.title} &nbsp;&nbsp;
              <strong>Total Hours:</strong>
              {course.total_hours} &nbsp;&nbsp;
              <strong>Course Rating:</strong>
              {course.overallRating}
              <button
                onClick={() =>
                  (window.location.href = `creditcardinfo?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Pay For Course
              </button>
            </p>
          </div>
        ))}
    </div>
  );
};
export default ViewCoursesForTrainee;
