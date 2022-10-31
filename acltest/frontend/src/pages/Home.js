import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
        <div>
            <h2>Home</h2>
        </div>
        <div>
        <Link to="/create">
        Create a user
        </Link>
        <br></br>
        <Link to="/viewallcourses">
        View All Courses
        </Link>
        <br></br>
        <Link to="/viewallcourseswithprices">
        View All Courses With Prices
        </Link>
        <br></br>
        <Link to="/selectcountry">
        Select a Course
        </Link>
        <br></br>


<br></br>
        <Link to="/create/createcourse">
        Create a course
        </Link>
        <br></br>
        <Link to="/instructor">
Search        </Link>
        </div>
        </div>
    )
}

export default Home