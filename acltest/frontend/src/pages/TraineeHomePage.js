import { Link } from "react-router-dom";
const TraineeHomePage = () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  console.log(userId);
  const urlsearchcourse = `/SearchCoursePage?userId=${userId}`;
  const urlviewmycourses = `/getmycourses?userId=${userId}`;
  const urlallcourses = `/viewallcoursesfortrainee`;
  const urlWallet = `/getwallet?userId=${userId}`;

  return (
    <div className="Apps">
      <br></br>

      <br></br>
      <Link to={urlsearchcourse}> Search Course</Link>
      <br></br>

      <Link to={urlviewmycourses}> View My Courses</Link>
      <br></br>
      <Link to={urlWallet}> View My Wallet </Link>
      <br></br>
      <Link to={urlallcourses}> View All Available Courses </Link>
    </div>
  );
};

export default TraineeHomePage;
