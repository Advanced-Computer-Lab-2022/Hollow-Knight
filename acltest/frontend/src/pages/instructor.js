import SearchInstructor  from "../components/Searchinstructor";
import InstructorBar from "../components/InstructorBar";

const Instructor = () => {
    return(
        <div className="Instructor">
            <InstructorBar x={7}/>
        <div>
            <h2>Instructor Search</h2>
        </div>
        <div>
        <SearchInstructor/>
        </div>
        </div>
    )
}

export default Instructor