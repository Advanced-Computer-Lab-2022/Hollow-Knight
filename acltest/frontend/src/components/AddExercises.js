import { useState } from "react";
import Question from"./Question"
import DisplayQuestions from "./DisplayQuestions";
export let problems=[]
const AddExercises = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [maxGrade, setMaxGrade] = useState(0);
  const[q1,setQ1]=useState(null)

  
  const [submitMessage, setSubmitMessage] = useState("");
  var exercise;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const params = new URLSearchParams(window.location.search);
    // const userId = params.get("subtitleId");
    // console.log(subtitleId);
    console.log(problems);
    exercise = {
      id: id,
      title: title,
      maxGrade: maxGrade,
      problems: problems,
    };
    //console.log(exercise);
    //console.log(problems)
    const response = await fetch(`/api/instructors/addexercise`, {
      method: "PATCH",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
     problems=[]
    // setAnswers(null);
    
    setSubmitMessage("Submitted");
  };
 

  return (
    <form className="addExercise" >
      <p>Subtitle ID:</p>
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <br></br>
      <p>Exercise Title:</p>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br></br>
      <p>Max Grade:</p>
      <input
        type="text"
        onChange={(e) => setMaxGrade(e.target.value)}
        value={maxGrade}
      />
      <br></br>
     
      <button onClick={handleSubmit}>Submit Exercise</button> <br></br>
     {<Question />}
    
  

   

      <h1>{submitMessage}</h1>
    </form>
  );
};

export default AddExercises;

