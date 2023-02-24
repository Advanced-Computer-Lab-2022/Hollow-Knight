import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import Button from '@mui/material/Button';
const Resetpass = () => {
   
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [password, setPassword] = useState('')
    const[error,setError] = useState(null);
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
        setError("Password Changed")
        }
        if(!response.ok){
            setError(man.error)
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

            <Button type="submit" variant="contained">submit</Button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default Resetpass