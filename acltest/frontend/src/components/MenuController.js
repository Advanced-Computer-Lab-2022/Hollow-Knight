import AdminNav from "./AdminNav"
import InstructorBar from "./InstructorBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/material";
import TraineeNav from "./TraineeNav";
import CorprateTraineeNav from "./CorprateTraineeNav";

const MenuController=()=>{
    const { useState ,} = require("react");
    const { user } = useAuthContext();
    const [type, setType] = useState(null);
      
    const gettype= async() =>{
      console.log(user,"here")
     if(user){
      const response = await fetch("/api/courses/gettype", {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
          },
      });
      const json= await response.json();
      
      if (!response.ok) {
         setType("not found")
      }
      if(response.ok){      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
          //save the user to local storage
          console.log(json)
          setType(json)
      }
    }
  }
  
  
  
  gettype()   

return(
    <Container sx={{marginTop:2}}>
{
    type=="instructor"&&<InstructorBar/>
}

{
    type=="admin"&&<AdminNav/>
}
{ type == "trainee" && <TraineeNav/>}
{ type == "corporate trainee" && <CorprateTraineeNav/>}



    </Container>
)

}
export default MenuController