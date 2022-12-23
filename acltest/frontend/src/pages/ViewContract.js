import React from "react"
import Contract from "../components/Contract"
import { useAuthContext } from "../hooks/useAuthContext";
const { useState ,useEffect} = require("react");

const ViewContract= ()=>{


    const [instructor, setInstructor] = useState(null)
    useEffect(() =>{
    const getCourse = async ()=>{
       
      
        const params = new URLSearchParams(window.location.search);
        const userid = params.get('userId');
     
   
        const response = await fetch(`/api/instructors/getinst?userId=${userid}`);
        const json = await response.json()
        //console.log(json)
        if(!response.ok){
          console.log("error")
        }
        if(response.ok){
            setInstructor(json)
            console.log("Found Workout")
            
         
        }
     
    }
    getCourse()
  
},[])

console.log(instructor)
    return(
        <div className="viewcontract">
           
           
       <div>{instructor && <Contract instructor={instructor}/>}
       </div>
        </div>
    )
}

export default ViewContract