import { useState } from "react";

const GetGrade = () => {
  const [subTitle, setSubTitle] = useState("");
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [grade, setGrade] = useState("");
  const handler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/trainees/getgrade", {
      method: "PATCH",
      body: JSON.stringify({
        subTitle: subTitle,
        exerciseTitle: exerciseTitle,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setGrade(json.grade + "/" + json.maxGrade);
      setSubTitle("");
      setExerciseTitle("");
    }
  };

  return (
    <form className="get grade" onSubmit={handler}>
      <h3>SubTitle:</h3>
      <input
        onChange={(e) => setSubTitle(e.target.value)}
        value={subTitle}
      ></input>
      <br></br>
      <h3>Exercise Title:</h3>
      <input
        onChange={(e) => setExerciseTitle(e.target.value)}
        value={exerciseTitle}
      ></input>
      <button>Check Grade</button>
      <br></br>
      <h3>Grade: {grade}</h3>
    </form>
  );
};
export default GetGrade;
