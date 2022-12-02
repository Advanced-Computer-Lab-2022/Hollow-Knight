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
      <Link to ={urladdexercises} > Add exercise</Link>
 
        </div>

    )
}

  return (
    <div className="Apps">
      <button
        variant="contained"
        onClick={() => (window.location.href = `/addcourse?userId=${userId}`)}
        key={userId}
        margin="normal"
        padding="normal"
      >
        Create a course
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

export default Apps;
