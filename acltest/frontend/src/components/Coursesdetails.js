import React from 'react';
import {Link} from "react-router-dom";
const CoursesDetails = ({ Courses }) => {


  const URL = "/instructor/coursedetails/"+Courses._id;
console.log(URL)

  return (
    <div className="courses-details">
      <h4>{Courses.title}</h4>
      <p><strong>Instructor </strong>{Courses.author}</p>
      <p><strong>rating: </strong>{Courses.rating}</p>
      <p>{Courses.subject}</p>

      <a href={URL}>
            <button><Link to= {URL} >View Details</Link></button>
            </a> 
    </div>
    
  )
}

export default CoursesDetails