import {Link} from "react-router-dom";
const Apps = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);
 
    return(
        <div className="Apps">
       
        <button variant="contained"
            onClick={() => window.location.href=`/addcourse?userId=${userId}`} key={userId}
            margin="normal"
            padding="normal">
       Create a course
      </button>
        <br></br>
        
        <button variant="contained"
            onClick={() => window.location.href=`/ViewReviews?userId=${userId}`} key={userId}
            margin="normal"
            padding="normal">
       View Courses Ratings and Reviews
      </button>
       
        </div>
    )
}

export default Apps