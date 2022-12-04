import { useParams } from "react-router-dom";
import React from 'react';

const { useState } = require("react");
const Forgotpasswordtoken = () =>{
    const param = useParams();
    const [password,setPassword] = useState('')
   
    const handleSubmit =async (e)=>{
        e.preventDefault()
        const response = await fetch('/api/users/changepassword/'+param.id,{
            method: 'POST',
            body: JSON.stringify({password}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        if(response.ok){
            console.log("done",json)
        
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
        </div>

    )
}

export default Forgotpasswordtoken
