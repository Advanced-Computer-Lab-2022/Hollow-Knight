import { useParams } from "react-router-dom";
import React from 'react';

const { useState } = require("react");
const Forgotpasswordtoken = () =>{
    const param = useParams();
    const [password,setPassword] = useState('')
    const [error, setError] = useState(null);

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const response = await fetch('/api/users/changepassword/'+param.id,{
            method: 'POST',
            body: JSON.stringify({password}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json();
        console.log(json);
        if(response.ok){
            console.log("done",json)
            setError("Password Changed")
        }
        if(!response.ok){
            setError(json.error)
        }

        
        
    }


    



    return( 
        //forgot password token
        <div className="forgotpasswordtoken" onSubmit={handleSubmit}>
            <h4>Change Password</h4><br></br>
            <form>
                <label>New Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button >Change Password</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>


    )
}

export default Forgotpasswordtoken
