import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const Home = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();
  useEffect(()=>{  
    
    
    if(!user)
      navigate("/login");
    if(user)
      navigate("/gettype");
    





},[user])

}

export default Home
