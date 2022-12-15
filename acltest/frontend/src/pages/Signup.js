import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Input from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const Signup = () => {

    //first_name,last_name,country,countryAbb,gender
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('');


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, loading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password, first_name, last_name, country, gender)
    }
    return (
        <Box component="form"
            className="signup"
            onSubmit={handleSubmit}
            //centered
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >



            <h3>Sign up</h3>
            <Input label="First Name" type="text" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            <br></br>
            <br></br>
            <Input label="Last Name" type="text" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            <br></br>
            <br></br>
           
             
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    value={gender}
                    label="Gender"
                    onChange={(e) => setGender(e.target.value)}
                >

                    <MenuItem value={""}>None</MenuItem>
                    <MenuItem value={"male"}>Male</MenuItem>

                    <MenuItem value={"female"}>Female</MenuItem>
                </Select>

            <br></br>
            <br></br>
            <Input label="Country" type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            <br></br>
            <br></br>
            <Input label="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <br></br>
            <Input label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <br></br>

            <br></br>
            <Button disabled={loading} type="submit" >Sign up</Button>
            {error && <div className="error">{error}</div>}



        </Box>
    )
}
export default Signup
