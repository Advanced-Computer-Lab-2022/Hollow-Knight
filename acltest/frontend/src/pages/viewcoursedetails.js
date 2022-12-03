
import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";


const { useState } = require("react");
const Viewcoursedetails = () => {
  
  const param = useParams();
  const [courses, setCourses] = useState("")


  useEffect(() =>{
    const handler = async() => {
        //e.preventDefault()
        const response = await fetch('/api/courses/coursedetails/'+param.id);
        const json = await response.json()
        if(response.ok){
            setCourses(json)
            console.log("hi")
            return;
        }
        return;
    }
    handler()
},[param])


  console.log("here")
  console.log(courses)
    return (
      
      <div className="viewcoursedetails">
      <h4>{courses.title}</h4>
        <p><strong>Price : </strong>{courses.price}</p>
        <p><strong>Subject : </strong>{courses.subject}</p>
        <p><strong>Author : </strong>{courses.author}</p>
        <p><strong>Rating : </strong>{courses.rating}</p>
        <p><strong>Subtitles : </strong>{courses.subtitles}</p>
        <p><strong>Subtitles Hours : </strong>{courses.subtitles_hours}</p>
        <p><strong>Summary : </strong>{courses.summary}</p>
        <p><strong>Excercises : </strong>{courses.excercises}</p>
        <p><strong>Total Hours : </strong>{courses.total_hours}</p>

      </div>
    )
  }
  
  export default Viewcoursedetails