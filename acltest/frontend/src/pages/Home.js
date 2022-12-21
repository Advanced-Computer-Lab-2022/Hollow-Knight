import React from "react";
import { Link } from "react-router-dom";
//import SearchCourse from "../components/SearchCourse";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h2>Home</h2>
      </div>
      <div>


       <Link to="/adminhome">Admin Home</Link>
      
        <br></br>
        <Link to="/viewallcourseswithprices">View All Courses With Prices</Link>
        <br></br>
        <Link to="/selectcountry">Select a Country</Link>
        <br></br>
        <Link to="/updateinfo">
        Update Instructor's information
        </Link>

        <br></br>
        
        <Link to="/resetpassword">
        Reset Password
        </Link> 
        <br></br>
      <Link to="/InstructorHome">
        Instructor Home Page
        </Link> 
        <br></br>
        <Link to="/trainee">
        Trainee Home Page
        </Link> 
        <Link to="/userAggrement">
        View All Courses
        </Link>
        <br></br>
      
        </div>
        </div>
    )
}

export default Home
