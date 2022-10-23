const CoursesTable = ({courses}) =>{
    return(
        <div className="coursesTable">
            <p><strong>Course Title:</strong>{courses.title} &nbsp;&nbsp;
            <strong>Total Hours:</strong>{courses.hours} &nbsp;&nbsp;
            <strong>Course:</strong>{courses.rating}
            </p>
        </div>

    )
}
export default CoursesTable