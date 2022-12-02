import {Link} from "react-router-dom";
const TraineeHomePage = () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  console.log(userId);
  const urlsearchcourse=`/SearchCoursePage?userId=${userId}`
  const urlviewmycourses=`/viewmycourses?userId=${userId}`

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

      <br></br>
      <Link  to= {urlsearchcourse}> Search Course</Link>
      <br></br>

      <Link  to= {urlviewmycourses}> View  My Courses</Link>
      <br></br>
    </div>
  );
};

export default TraineeHomePage;
