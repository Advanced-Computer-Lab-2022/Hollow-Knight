import React from "react";
import {Link} from "react-router-dom";

// import SearchCourse from "../components/SearchCourse";

const Home = () => {
  return (
    <div className="home">
      <div>
      </div>
      <div>
        <Link to="/create">
          Create a user
        </Link>
        <br></br>
        <Link to="/viewallcourses">View All Courses</Link>
        <br></br>
        <Link to="/viewallcourseswithprices">View All Courses With Prices</Link>
        <br></br>
        <Link to="/selectcountry">Select a Country</Link>
        <br></br>
        <Link to="/updateinfo">
        Update Instructor's information
        </Link>

        <br></br>
        <Link to="/addcourse">Create a course</Link>
        <br></br>
        <Link to="/instructor">Search Inst </Link>
        <br></br>
        <Link to="/SearchCoursePage">Search </Link>
        <br></br>

      <Link to="/InstructorHome">
        Instructor Home Page
        </Link> 
        <br></br>
        <Link to="/trainee">
        Trainee Home Page
        </Link> 
        </div>
        </div>
    )
}

export default Home
