import {Link} from "react-router-dom";


const Apps = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const urlmyreview=`/Reviews?userId=${userId}`
    const urlcoursereview=`/ViewReviews?userId=${userId}`
    const urladdcourse=`/addcourse?userId=${userId}`
    const urlsearchcourse=`/instructor?userId=${userId}`
   
    const urlallcourses=`/viewallcourses`
    const urlviewmycourses=`/viewmycourses?userId=${userId}`
    return(
        <div className="Apps">

       
      <br></br>
      <Link  to= {urladdcourse}> Add Course</Link>
      <br></br>

      <Link  to= {urlmyreview}> My Reviews</Link>
      <br></br>
      <Link  to= {urlcoursereview}> View Courses Reviews</Link>
      <br></br>
      <Link to ={urlsearchcourse} > Search  Instructor </Link>
      <br></br>
     
   
      <Link to ={urlallcourses} > View All Available Courses </Link>
      <br></br>
      <Link to ={urlviewmycourses} > View My Courses </Link>
     
        
      <br></br>
    

    
       
        </div>

    )
}



export default Apps;