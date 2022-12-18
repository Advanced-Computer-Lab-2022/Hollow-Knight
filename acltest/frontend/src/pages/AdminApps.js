import {Link} from "react-router-dom";


const AdminApps = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const urladduser=`/create`
    const urlviewrequests = "/viewrequests"
    const urlselectdiscounts = "/selectdiscounts"
    return(
        <div className="Apps">


      <br></br>
      <Link to ={urladduser} > Add User </Link>
      <br></br>
      <br></br>
      <Link to ={urlviewrequests} > View Requests </Link>
      <br></br>
      <br></br>
      <Link to ={urlselectdiscounts} > Create Discounts to courses </Link>
      <br></br>
       
        </div>

    )
}



export default AdminApps;
