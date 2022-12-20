import React from "react"
import Contract from "../components/Contract"
import { useAuthContext } from "../hooks/useAuthContext";
const { useState ,useEffect} = require("react");

const ViewContract= ()=>{


    const [courses, setCourses] = useState(null)
    const { user } = useAuthContext();
    useEffect(() =>{
    const getCourse = async ()=>{
       
      
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('courseId');
   
        const response = await fetch(`/api/instructors/getcoursebyid?courseId=${courseId}`,{
            headers: {
    
              'Authorization': `Bearer ${user.token}` 
                
            },
          });
        const json = await response.json()
        if(!response.ok){
          console.log("error")
        }
        if(response.ok){
            setCourses(json)
            console.log("Found Workout")
            
            return ;
        }
        return;
    }
    getCourse()
    console.log(courses)
},[])


    return(
        <div className="viewcontract">
           
           
       <div>{courses && <Contract courses={courses}/>}</div>
        </div>
    )
}
export default ViewContract