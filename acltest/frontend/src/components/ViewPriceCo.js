import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';

const { useState } = require("react");
const ViewPriceCo = () =>{
    const param = useParams();
    const [course,setCourse] = useState('')
    useEffect(() =>{
        const handler = async() => {
            //e.preventDefault()
            const response = await fetch('/api/courses/'+param.id);
            const json = await response.json()
            if(response.ok){
                setCourse(json)
                console.log("hi")
                return;
            }
            return;
        }
        handler()
    },[param])



    return( 
        <div className="viewPrice">
            <h4>{course.title}</h4><br></br>
                <p key={course._id}>
                <label>Price:</label>
                <label>{course.price}</label>
                </p>
            

        </div>
    )
}

export default ViewPriceCo
