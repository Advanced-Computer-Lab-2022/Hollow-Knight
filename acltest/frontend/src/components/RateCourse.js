import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const RateCourse = () => {
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [courses, setCourses] = useState("");
  const { user } = useAuthContext();
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const courseId = params.get("courseId");
  useEffect(() => {
    const handler = async () => {
      const response = await fetch("/api/trainees/gettraineecourses", {
        method: "PATCH",
        body: JSON.stringify({
          id: userId,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
      });
      const json = await response.json();
      //console.log(json);
      setCourses(json.registeredcourses);
      console.log(json.registeredcourses);
    };
    handler();
  }, []);
  const rateHandler = async (e) => {
    console.log(userId);
    e.preventDefault();
    const response = await fetch("/api/trainees/ratecourse", {
      method: "PATCH",
      body: JSON.stringify({
        courseId: courseId,
        rating: rating,
        id: userId,
        review: review,
      }),
      headers: {
        "Content-Type": "application/json"
        ,Authorization: `Bearer ${user.token}`
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
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <h1>Rating:</h1>
      <input
        type="text"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      ></input>
      <h1>Review:</h1>
      <input
        type="text"
        onChange={(e) => setReview(e.target.value)}
        value={review}
      ></input>
      <button>Rate</button>
      <h3>{confirmation}</h3>
    </form>
  );
};
export default RateCourse;
