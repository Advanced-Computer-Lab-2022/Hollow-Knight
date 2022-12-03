import { useEffect, useState } from "react"
import {problems} from "./AddExercises"



const DisplayQuestions = () => {
    const[problem,setProblem]= useState([])
    useEffect(()=>{

  const fetch = async ()=>{
    setProblem(problems)
            }
           
//console.log(problems)
},[])
      return (
        
        <div className="DisplayQuestions">
        <h1>ddfdf</h1>
         { problem.map((problems)=>(
    <div key={problems._id}>
<p>Q1:{problems.questions}</p>
                                       
                                        
     </div>
                                     ))}
  
        </div>
      )
    }
    
    export default DisplayQuestions