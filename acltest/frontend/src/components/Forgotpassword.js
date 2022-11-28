import { useState } from "react";

const Forgotpassword = () => {
    const [email, setEmail] = useState('')
    
    const handleClick = async () => {
        const Email = {email}
    
        const response = await fetch('/api/users/forgotPassword', {
          method: 'POST',
          body: JSON.stringify(Email),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response)
      const json = await response.json() 
      if(response.ok){
        console.log(email,json);
          }

    }
    
  
    return (
      <form className="Forgot pass" onSubmit={handleClick} >
            <h2>forgotPassword</h2>
           
            <label>Email:</label>
            <input
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
             

            <button>FORGET PASS</button>
        </form>
    )
  }
  
  export default Forgotpassword