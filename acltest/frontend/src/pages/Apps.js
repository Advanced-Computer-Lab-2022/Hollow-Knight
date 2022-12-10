import {Link} from "react-router-dom";


const Apps = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const urlmyreview=`/Reviews?userId=${userId}`
    const urlcoursereview=`/ViewReviews?userId=${userId}`
    const urladdcourse=`/addcourse?userId=${userId}`
    const urlsearchcourse=`/instructor?userId=${userId}`
    const urlviewcontract=`/ViewContract`
    const urladdexercises=`/addexercise`
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
      <Link to ={urlviewcontract} > Contract</Link>

      <br></br>
     
        
      <br></br>
      <button variant="contained"
            onClick={() => window.location.href=`/viewmycourses?userId=${userId}`} key={userId}
            margin="normal"
            padding="normal">
       View my courses
      </button>

    
       
        </div>

    )
}



export default Apps;
