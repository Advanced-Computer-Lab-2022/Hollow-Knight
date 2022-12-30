import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import CoursesDetails from "../components/Coursesdetails";
import CourseCard from "../components/Coursesdetails";

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
      if(user){
        fetchCourses();
      }
    
  }, [user]);
  return (
    <div className="courses">
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
            <p>
            <CourseCard key={courses._id} Courses={course} />
            </p>
          </div>
        ))}
    </div>
  );
};
export default ViewCourses;
