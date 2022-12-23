import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses",{
        method: 'GET',
        headers: {

          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`


        }
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
            </p>
          </div>
        ))}
    </div>
  );
};
export default ViewCourses;
