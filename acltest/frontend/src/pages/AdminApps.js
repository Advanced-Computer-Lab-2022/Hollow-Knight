
import AdminNav from '../components/AdminNav'
const AdminApps = () => {
    const params = new URLSearchParams(window.location.search);
    return(
        <div className="Apps">
          <AdminNav/>
       
        </div>

    )
}



export default AdminApps;
