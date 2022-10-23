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

        <Link to="/create/createcourse">
        Create a course
        </Link>
        </div>
        </div>
    )
}

export default Home