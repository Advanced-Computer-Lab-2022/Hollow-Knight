import ViewReports from '../components/ViewReports'
import AdminNav from '../components/AdminNav'

const ReportsView = () => {
    return(
        <div className="ViewReports">
        <AdminNav/>
        <div>
            <h2>Reports By Trainees</h2>
        </div>
        <div>
        <ViewReports/>
        </div>
        </div>
    )
}

export default ReportsView