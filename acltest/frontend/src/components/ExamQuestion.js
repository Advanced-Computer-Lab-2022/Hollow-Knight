import { useState } from "react";
import {Examproblems} from "./CreateExamComp"
const ExamQuestion = ()=>{
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [solution, setSolution] = useState("");
    const [bobo,setbobo] = useState([]);
  
    
    const handleSubmit = async (e) => {
        e.preventDefault();
   
   //console.log(Examproblems)
        setAnswers([])
        answers.push(answer1);
        answers.push(answer2);
        answers.push(answer3);
        answers.push(answer4);
        //console.log(answer1)
        //console.log(answers)
        //console.log("hi")
        Examproblems.push({
            questions: question,
            answers: answers,
            solution: solution,
          });
        setbobo(Examproblems)
        console.log(Examproblems)
        setAnswer1("")
        setAnswer2("")
        setAnswer3("")
        setAnswer4("") 
        setQuestion("")
        setSolution("") 
        setAnswers([])
      
    
    }
    return(
    <div>
    {<div><p>Question:</p>
    <input
      type="text"
      onChange={(e) => setQuestion(e.target.value)}
      value={question}
    />
    <br></br>
    <p>Answers:</p>
    <input
      type="text"
      onChange={(e) => setAnswer1(e.target.value)}
      value={answer1}
    />
    <input
      type="text"
      onChange={(e) => setAnswer2(e.target.value)}
      value={answer2}
    />
    <input
      type="text"
      onChange={(e) => setAnswer3(e.target.value)}
      value={answer3}
    />
    <input
      type="text"
      onChange={(e) => setAnswer4(e.target.value)}
      value={answer4}
    />
    <br></br>
    <p>Solution:</p>
    <input
      type="text"
      onChange={(e) => setSolution(e.target.value)}
      value={solution}
    />
    <button onClick={handleSubmit}>Insert Question</button> <br></br></div>}

    <div className="DisplayQuestions">
        <h1>Examproblems</h1>
         { bobo.map((Examproblems,index)=>(
        <div key={index}>
    <p>Q{index}:{Examproblems.questions}</p>
                                       
                                        
     </div>
                                     ))}
  
        </div>
    
  </div>)
}
export default ExamQuestion