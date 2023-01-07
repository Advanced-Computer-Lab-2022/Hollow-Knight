
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import GetType from "../components/GetType";
export const useLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const[user,setUser]=useState(null);
    const login = async (email, password) => {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
        "Content-Type": "application/json",
        },
    });
    const json= await response.json();
    if (!response.ok) {
        setLoading(false);
        setError(json.error);
    }
    if(response.ok){      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
        //save the user to local storage                            
        localStorage.setItem("user", JSON.stringify(json));//store the token
        dispatch({type: "LOGIN", payload: json});
        setLoading(false);
        setUser(json);
        navigate("/gettype")
        
    }


    }
    return { login, error, loading };

}