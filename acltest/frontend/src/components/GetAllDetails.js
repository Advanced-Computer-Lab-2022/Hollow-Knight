
const GetAllDetails = ({courses}) => {
  


  console.log("here")
  console.log(courses)
    return (
      
      <div className="viewcoursedetails">
      <h4>{courses.title}</h4>
        <p><strong>Price : </strong>{courses.price}</p>
        <p><strong>Subject : </strong>{courses.subject}</p>
        <p><strong>Author : </strong>{courses.author}</p>
        <p><strong>Rating : </strong>{courses.overallRating}</p>
     
        <p><strong>Summary : </strong>{courses.summary}</p>
     
        <p><strong>Total Hours : </strong>{courses.total_hours}</p>
     

      </div>
    )
  }
  
  export default GetAllDetails