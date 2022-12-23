import React, { useEffect } from "react";
import ExQuestion from "./ExQuestion";

import { Button } from "@mui/material";

const { useState } = require("react");

const ViewAnswers = () => {
  const [problems, setProblems] = useState(null);
  const [solution,setSolution] = useState("false");


  useEffect(() => {



    const params = new URLSearchParams(window.location.search);
    const subid = params.get("subid");
    const id = params.get("id");
    console.log(subid, " , ", id);


    const getproblems = async () => {
      const response = await fetch("/api/trainees/getanswers", {
        method: "PATCH",
        body: JSON.stringify({ subid, id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json[0]);

      if (response.ok) {
        setProblems(json);
      }
    };

    getproblems();
  }, []);

  const handler= async()=>{
   // console.log(answer)
   setSolution('true')
  }
  
  return (
    <div className="viewanswers">
      {problems &&
        problems.map((problem) => (
          <div  key={problem._id}>
          
           <ExQuestion problem={problem}/>
        {  solution=="true" &&<p> Answer  : {problem.solution}</p>}

          </div>
        ))}
        <Button onClick={handler}>submit</Button>
    </div>
  );
};

export default ViewAnswers;
