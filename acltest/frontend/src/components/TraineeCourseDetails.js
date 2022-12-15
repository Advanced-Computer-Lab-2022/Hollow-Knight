import React from 'react';
import {Link} from "react-router-dom";
const TraineeCoursesDetails = ({ Courses }) => {


  const URL = "/traineesearchcourse/"+Courses._id;
console.log(URL)

  return (
    <div className="courses-details">
      <h4>{Courses.title}</h4>
      <p><strong>Instructor </strong>{Courses.author}</p>
      <p><strong>rating: </strong>{Courses.overallRating}</p>
      <p>{Courses.subject}</p>

      <a href={URL}>
            <button  onClick={() => window.location.href=URL} >View Details</button>
            </a> 
    </div>
    
  )
}

export default TraineeCoursesDetails