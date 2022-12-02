
import { useState } from "react";

const GoTrainee = () => {

  const [id,setId]=useState('')
  
    return (
      <div className="GoTrainee">
      
 <form>
      <label for="TraineeID">Enter ID :</label><br></br>
      <input type="text" onChange={(e)=> setId(e.target.value)}
        />
      
  </form>
      <button variant="contained"
            onClick={() => window.location.href=`/traineeapps?userId=${id}`} key={id}
            margin="normal"
            padding="normal">
      Confirm
      </button>
      </div>
    )
  }
  
  export default GoTrainee
  