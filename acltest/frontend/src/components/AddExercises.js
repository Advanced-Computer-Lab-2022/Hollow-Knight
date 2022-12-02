import { useState } from "react";
import Question from"./Question"
//import DisplayQuestions from "./DisplayQuestions";
export let problems=[]
const AddExercises = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [maxGrade, setMaxGrade] = useState(0);
  const[q1,setQ1]=useState(null)
  const[display,setDisplay] = useState(false)

  
  const [submitMessage, setSubmitMessage] = useState("");
  var exercise;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const params = new URLSearchParams(window.location.search);
    // const userId = params.get("subtitleId");
    // console.log(subtitleId);
    console.log(problems);
    exercise = {
      title: title,
      maxGrade: maxGrade,
      problems: problems,
    };
    //console.log(exercise);
    //console.log(problems)
    const params = new URLSearchParams(window.location.search);
    const subtitleId = params.get('subtitleId');
    const response = await fetch(`/api/instructors/addexercise?subtitleId=${subtitleId}`, {
      method: "PATCH",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    problems=[]
    // setAnswers(null);
    if(response.ok){
      setTitle("")
      setMaxGrade("")
      
    }

    
    setSubmitMessage("Submitted");
  };

  const viewquestions = async (e) => {
    e.preventDefault();
    setDisplay(true)
  }
 

  return (
    <form className="addExercise" >
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
     {<Question/>}
      <button onClick={viewquestions}>view</button>
  

   

      <h1>{submitMessage}</h1>
    </form>
  );
};

export default AddExercises;

