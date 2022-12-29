import { useState } from "react";
import ExamQuestion from"./ExamQuestion"
import { useAuthContext } from "../hooks/useAuthContext";
//import DisplayQuestions from "./DisplayQuestions";
export let Examproblems=[]
const CreateExamComp = () => {
  const [title, setTitle] = useState("");

  const [maxGrade, setMaxGrade] = useState(0);

  const[display,setDisplay] = useState(false)
  const { user } =  useAuthContext();

  
  const [submitMessage, setSubmitMessage] = useState("");
  var exercise;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const params = new URLSearchParams(window.location.search);
    // const userId = params.get("subtitleId");
    // console.log(subtitleId);
    console.log(Examproblems);
    exercise = {
      title: title,
      maxGrade: maxGrade,
      problems: Examproblems,
    };
    //console.log(exercise);
    //console.log(problems)
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const response = await fetch(`/api/instructors/addexam?courseId=${courseId}`, {
      method: "PATCH",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });
    Examproblems=[]
    // setAnswers(null);
    if(response.ok){
      setTitle("")
      setMaxGrade("")
      
    }

    
    setSubmitMessage("Submitted");
  };

  
 

  return (
    <form className="addExercise" >
      <p>Exam Title:</p>
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
     
      <button onClick={handleSubmit}>Submit Exam</button> <br></br>
     {<ExamQuestion/>}
      
  

   

      <h1>{submitMessage}</h1>
    </form>
  );
};

export default CreateExamComp;

