//import {Link} from "react-router-dom";
const TraineeHomePage = () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  console.log(userId);

  return (
    <div className="Apps">
      <button
        variant="contained"
        onClick={() => (window.location.href = `/ratecourse?userId=${userId}`)}
        key={userId}
        margin="normal"
        padding="normal"
      >
        Rate Course
      </button>
      <br></br>

      <button
        variant="contained"
        onClick={() => (window.location.href = `/ViewReviews?userId=${userId}`)}
        key={userId}
        margin="normal"
        padding="normal"
      >
        View Courses Ratings and Reviews
      </button>
    </div>
  );
};

export default TraineeHomePage;
