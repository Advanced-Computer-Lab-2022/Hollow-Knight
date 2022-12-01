import { useState } from "react";

const AddExercises = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [maxGrade, setMaxGrade] = useState(0);
  const [problems, setProblems] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [solution, setSolution] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  var exercise;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProblems(null);
    setAnswers(null);
    answers.push(answer1);
    answers.push(answer2);
    answers.push(answer3);
    answers.push(answer4);
    problems.push({
      questions: question,
      answers: answers,
      solution: solution,
    });
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
    console.log(exercise);
    const response = await fetch(`/api/instructors/addexercise`, {
      method: "PATCH",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProblems(null);
    setAnswers(null);
    setSubmitMessage("Submitted");
    return response.json();
  };

  return (
    <form className="addExercise" onSubmit={handleSubmit}>
      <h1>Subtitle ID:</h1>
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <br></br>
      <h1>Exercise Title:</h1>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br></br>
      <h1>Max Grade:</h1>
      <input
        type="text"
        onChange={(e) => setMaxGrade(e.target.value)}
        value={maxGrade}
      />
      <br></br>
      <h1>Question:</h1>
      <input
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
      />
      <br></br>
      <h1>Answers:</h1>
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
      <h1>Solution:</h1>
      <input
        type="text"
        onChange={(e) => setSolution(e.target.value)}
        value={solution}
      />
      <button>Submit</button> <br></br>
      <h1>{submitMessage}</h1>
    </form>
  );
};
export default AddExercises;
