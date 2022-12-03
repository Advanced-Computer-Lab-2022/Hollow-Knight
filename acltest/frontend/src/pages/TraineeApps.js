import {Link} from "react-router-dom";


const TraineeApps = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const urlsearchcourse=`/SearchCoursePage?userId=${userId}`
    const urlviewmycourses=`/viewmycourses?userId=${userId}`
   
    return(
        <div className="TraineeApps">

       
      <br></br>
      <Link  to= {urlsearchcourse}> Search Course</Link>
      <br></br>

      <Link  to= {urlviewmycourses}> View  My Courses</Link>
      <br></br>
    
        </div>

    )
}

export default TraineeApps