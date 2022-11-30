import { useState } from "react";
import SearchInstructor from "../components/Searchinstructor";

const GoTrainee = () => {
  const [userId, setId] = useState("");
  console.log(userId);
  return (
    <div className="Instructor">
      <h2>Please Enter Trainee ID</h2>
      <br></br>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={userId}
      />
      <button
        onClick={() =>
          (window.location.href = `/TraineeHomePage?userId=${userId}`)
        }
        key={userId}
      >
        Confirm
      </button>
    </div>
  );
};

export default GoTrainee;
