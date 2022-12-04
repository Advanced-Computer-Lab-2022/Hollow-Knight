import { useState } from "react";
import { useParams } from "react-router-dom";
const RateInstructor = () => {
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const rateHandler = async (e) => {
    console.log(courseId);
    e.preventDefault();
    const input = {username, review}
    const response = await fetch(`/api/instructors/rate?courseId=${courseId}`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  };

  return (
    <form className="RateCourseForm" onSubmit={rateHandler}>
      <h1>Confirm By entering Username:</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      ></input>
      <h1>Rating:</h1>
      <input
        type="text"
        onChange={(e) => setReview(e.target.value)}
        value={review}
      ></input>
      <button>Rate</button>
    </form>
  );
};
export default RateInstructor;
