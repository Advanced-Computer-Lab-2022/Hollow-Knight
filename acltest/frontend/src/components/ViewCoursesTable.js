
const CoursesTable = ({courses}) =>{
    const URL = "/price/"+courses._id;
    return(
        <div className="coursesTable">
            <p><strong>Course Title:</strong>{courses.title} &nbsp;&nbsp;
            <strong>Total Hours:</strong>{courses.hours} &nbsp;&nbsp;
            <strong>Course:</strong>{courses.rating}
            <a href={URL}>
            <button>View Price</button>
            </a>
            </p>
        </div>

    )
}
export default CoursesTable