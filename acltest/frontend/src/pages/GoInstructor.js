
import { useState } from "react";

const GoInstructor = () => {

  const [id,setId]=useState('')
  
    return (
      <div className="GoInstructor">
      
 <form>
      <label for="InstructorHome">Enter ID :</label><br></br>
      <input type="text" onChange={(e)=> setId(e.target.value)}
        />
      
  </form>
      <button variant="contained"
            onClick={() => window.location.href=`/apps?userId=${id}`} key={id}
            margin="normal"
            padding="normal">
      Confirm
      </button>
      </div>
    )
  }
  
  export default GoInstructor
  