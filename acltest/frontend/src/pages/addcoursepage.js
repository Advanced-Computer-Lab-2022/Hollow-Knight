//import { useEffect,useState } from "react"
import { Container } from "@mui/system"
import Courseform from "../components/Courseform"
import InstructorBar from "../components/InstructorBar";


const Addcoursepage = () => {

  
    return (
      <div className="addcoursepage">
      <InstructorBar x={4}/>
        <Courseform/>
      </div>
    )
  }
  
  export default Addcoursepage
  