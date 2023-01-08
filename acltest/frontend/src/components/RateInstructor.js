import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const RateInstructor = () => {
  const [review, setReview] = useState("");
  const [desc, setDesc] = useState("");
  const [username, setUsername] = useState("");
  const { user } = useAuthContext();
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const rateHandler = async (e) => {
    console.log(courseId);
    e.preventDefault();
    const input = {username, review,desc}
    const response = await fetch(`/api/instructors/rate?courseId=${courseId}`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
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
        <h1>Review:</h1>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
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
