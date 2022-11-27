import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
const Resetpass = () => {
   
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [password, setPassword] = useState('')
     const { user } = useAuthContext();
    const passwordchanger = async (e) => {
        e.preventDefault()
       
        setEmail(user.email)
        const data = {email, password, newPassword}

        const response = await fetch('/api/users/changepassword', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        console.log('pass changed', man)
        }

    }

    return (
        <form className="login" onSubmit={passwordchanger} >
           

         
           
            <label>password:</label>
            <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
                <label>NewPassword:</label>
            <input
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            />

            <button>submit</button>
        </form>
    )

}

export default Resetpass