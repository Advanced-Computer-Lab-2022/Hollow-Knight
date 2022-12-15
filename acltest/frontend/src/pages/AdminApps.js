import {Link} from "react-router-dom";


const AdminApps = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const urladduser=`/create`
    return(
        <div className="Apps">


      <br></br>
      <Link to ={urladduser} > Add User </Link>
      <br></br>
       
        </div>

    )
}



export default AdminApps;
