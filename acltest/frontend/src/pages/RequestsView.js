import ViewRequests from '../components/ViewRequests'
import AdminNav from '../components/AdminNav'

const RequestsView = () => {
    return(
        <div className="ViewRequests">
        <AdminNav/>
        <div>
            <h2>Requests By Corporate Trainees</h2>
        </div>
        <div>
        <ViewRequests/>
        </div>
        </div>
    )
}

export default RequestsView