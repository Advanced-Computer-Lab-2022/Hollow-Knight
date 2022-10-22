import CreateInstructor from '../components/CreateInstructor'
import CreateTrainee from '../components/CreateTrainee'

const Createuser = () => {
    return(
        <div className="CreateUser">
        <div>
            <h2>Create a user</h2>
        </div>
        <div>
        <CreateInstructor />
        <CreateTrainee />
        </div>
        </div>
    )
}

export default Createuser