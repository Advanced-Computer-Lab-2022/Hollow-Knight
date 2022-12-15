
import { useState } from "react";
const AdminHomePage = () => {


  const [id,setId]=useState('')
  return (
    <div className="adminhome">
    
<form>
    <label for="adminid">Enter ID :</label><br></br>
    <input type="text" onChange={(e)=> setId(e.target.value)}
      />
    
</form>
    <button variant="contained"
          onClick={() => window.location.href=`/adminapps?userId=${id}`} key={id}
          margin="normal"
          padding="normal">
    Confirm
    </button>
    </div>
  )
};

export default AdminHomePage;
