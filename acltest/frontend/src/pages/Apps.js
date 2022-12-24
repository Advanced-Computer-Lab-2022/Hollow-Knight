import C1 from "../components/C1"
import InstructorBar from "../components/InstructorBar";
import {Link} from "react-router-dom";
const { useState ,useEffect} = require("react");


const Apps = () => {
  

    return(
        <div className="Apps">

       <InstructorBar x={0}/>
      <br></br>
      <C1/>
     
       
        </div>

    )
}



export default Apps;
