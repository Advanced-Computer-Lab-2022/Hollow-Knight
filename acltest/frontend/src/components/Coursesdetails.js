const CoursesDetails = ({ courses }) => {

    return (
      <div className="courses-details">
        <h4>{courses.title}</h4>
        <p><strong>Instructor </strong>{courses.author}</p>
        <p><strong>rating: </strong>{courses.rating}</p>
        <p>{courses.subject}</p>
      </div>
    )
  }
  
  export default CoursesDetails