import AdminNav from "./AdminNav"
import InstructorBar from "./InstructorBar";
import GuestBar from "./GuestBar";

import { useAuthContext } from "../hooks/useAuthContext";
import { Container } from "@mui/material";

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
      }
      if(response.ok){      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
          //save the user to local storage
          setType(json)
      }
      console.log(type)
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
    



    </Container>
)

}
export default MenuController