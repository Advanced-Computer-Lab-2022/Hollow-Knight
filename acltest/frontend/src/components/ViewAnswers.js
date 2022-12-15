import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import GetAllDetails from "../components/GetAllDetails";
import UpdateCourse from "../components/UpdateCourse";
const { useState } = require("react");

const ViewAnswers = () => {
  const [problems, setProblems] = useState(null);
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
      console.log(json);

      if (response.ok) {
        setProblems(json);
      }
    };

    getproblems();
  }, []);

  return (
    <div className="viewanswers">
      {problems &&
        problems.map((problem) => (
          <div>
            <p>{problem.questions}</p>
            <p>a : {problem.answers[0]}</p> <p>b : {problem.answers[1]}</p>{" "}
            <p>c : {problem.answers[2]}</p> <p>d : {problem.answers[3]}</p>
            <p> solution : {problem.solution}</p>
          </div>
        ))}
    </div>
  );
};

export default ViewAnswers;
