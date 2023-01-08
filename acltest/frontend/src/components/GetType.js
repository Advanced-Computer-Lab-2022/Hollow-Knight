import { useNavigate } from "react-router-dom";
import { useState ,UseEffect} from "react"
import { useAuthContext } from "../hooks/useAuthContext";

const GetType=()=>{
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const [type, setType] = useState(null);
    const gettype= async() =>{
        console.log(user,"here")
       if(user){
        const res = await fetch("/api/courses/gettype", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user.token}`
            },
        });
        const json= await res.json();
        if (!res.ok) {
           setType("not found")
        }
        if(res.ok){      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
            //save the user to local storage
            //console.log(json)
            setType(json)
        }
      }
    }
    gettype();
    console.log(type+"sdf")
    if(type == "trainee") {navigate('/traineeprofile');}
    if(type == "corporate trainee") {navigate('/traineeprofile');}
    if(type == "instructor") {navigate('/traineeprofile');}
    if(type == "admin") {navigate('/create');}
    




}
export default GetType;