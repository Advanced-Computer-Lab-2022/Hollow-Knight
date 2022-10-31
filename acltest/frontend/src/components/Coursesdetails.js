const CoursesDetails = ({ Courses }) => {

  return (
    <div className="courses-details">
      <h4>{Courses.title}</h4>
      <p><strong>Instructor </strong>{Courses.author}</p>
      <p><strong>rating: </strong>{Courses.rating}</p>
      <p>{Courses.subject}</p>
    </div>
  )
}

export default CoursesDetails