import { useState } from "react";

const Forgotpassword = ({ workout }) => {
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
      const json = await response.json()
      if(response.ok){
        console.log("sendemail",json)
      }

    }
    
  
    return (
      <form className="createinstructor" onSubmit={handleClick} >
            <h2>forgotPassword</h2>
           
            <label>Email:</label>
            <input
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
             

            <button>Add Instructor</button>
        </form>
    )
  }
  
  export default Forgotpassword