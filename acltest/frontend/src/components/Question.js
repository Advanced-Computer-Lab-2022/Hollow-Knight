import { useState } from "react";
import {problems} from "./AddExercises"

const Question = ()=>{
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [solution, setSolution] = useState("");
    const[pressed1,setPressed1]=useState(null)
    const[pressed2,setPressed2]=useState(null)
    const[pressed3,setPressed3]=useState(null)
    const[pressed4,setPressed4]=useState(null)
  
    
    const handleSubmit = async (e) => {
        e.preventDefault();
   
   //console.log(problems)
        setAnswers([])
        answers.push(answer1);
        answers.push(answer2);
        answers.push(answer3);
        answers.push(answer4);
        //console.log(answer1)
        //console.log(answers)
        //console.log("hi")
        problems.push({
            questions: question,
            answers: answers,
            solution: solution,
          });
        console.log(problems)
        console.log(pressed1)
       if(!pressed1){
        setPressed1("true")
        console.log('hi')
       }
       console.log(pressed1)
     
        setAnswer1("")
        setAnswer2("")
        setAnswer3("")
        setAnswer4("") 
        setQuestion("")
        setSolution("") 
        setAnswers([])
      
        console.log(pressed1)
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

    { pressed1&&<div>
        <p>here</p>   
    </div>}
    {pressed2 && <div>
        <p>there</p>
    </div>
        
    }
  </div>
  
  )

  
}
export default Question