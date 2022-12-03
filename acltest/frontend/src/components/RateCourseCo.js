import { useState } from "react";
import { useParams } from "react-router-dom";
const RateCourseCo = () => {
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const param = useParams();
  const rateHandler = async (e) => {
    e.preventDefault();
    const url = "/api/trainees/ratecourse/" + param.id;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        rating: rating,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    setConfirmation("Course Rating Updated");
  };

  return (
    <form className="RateCourseForm" onSubmit={rateHandler}>
      <h1>Course Title:</h1>
      <input
        type="text"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      ></input>
      <h1>Rating:</h1>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <button>Rate</button>
      <h3>{confirmation}</h3>
    </form>
  );
};
export default RateCourseCo;
