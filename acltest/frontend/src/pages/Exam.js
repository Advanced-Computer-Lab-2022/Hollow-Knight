import React, { useEffect } from "react";
import ExQuestion from "../components/ExQuestion";
import { useAuthContext } from "../hooks/useAuthContext";


import { Button } from "@mui/material";

const { useState } = require("react");

const Exam = () => {
  const [problem, setProblem] = useState(null);
  const [solution,setSolution] = useState("false");
  const { user } = useAuthContext();

  useEffect(() => {



    const params = new URLSearchParams(window.location.search);
    
    const courseid = params.get("courseid");
   

if(user){
    const getproblems = async () => {
      const response = await fetch("/api/trainees/getexam", {
        method: "PATCH",
        body: JSON.stringify({ courseid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
      });
      const json = await response.json();
      console.log(json[0]);

      if (response.ok) {
        setProblem(json);
      }
    };

    getproblems();}
  }, [user]);

  const handler= async()=>{
   // console.log(answer)
   setSolution('true')
  }
  
  return (
    <div className="viewanswers">
      {problem && problem.map((problem) => (
          <div  key={problem._id}>
   
       
           <ExQuestion problem={problem}/>
        {  solution=="true" &&<p> Answer  : {problem.solution}</p>}

          </div>
          ))}
        <Button onClick={handler}>submit</Button>
    </div>
  );
};

export default Exam;
