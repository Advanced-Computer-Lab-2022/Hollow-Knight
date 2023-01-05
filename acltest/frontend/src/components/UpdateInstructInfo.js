import { useState,useMemo } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
// use Memo
import Select from "react-select";
import countryList from "react-select-country-list";
//

const UpdateInstructInfo = () => {
    const[first_name,setFirst_name]=useState(null)
    const[last_name,setLast_name]=useState(null)
    const [mail, setMail] = useState('')
    const [biography, setBiography] = useState('')
   ///
    const [country, setCountry] = useState("");
    const [countryAbb, setCountryAbb] = useState("");
    const options = useMemo(() => countryList().getData(), []);
    const [value, setValue] = useState("");
    ////
    const { user } = useAuthContext();

    const changeHandler = (value) => {
        setValue(value);
        setCountry(value.label);
        setCountryAbb(value.value);
      };

    const updateinstructor = async (e) => {
        
        e.preventDefault()

        const instructor = {first_name, last_name,mail,biography,country,countryAbb}

        const response = await fetch('/api/instructors/updateinfo', {
            method: 'POST',
            body: JSON.stringify(instructor),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }

        })
        const man = await response.json()
        if (response.ok) {
        setFirst_name("")
        setLast_name("")
        setMail('')
        setBiography('')
        console.log('instructor changed', man)

        }

    }

    return (
        <form className="UpdateInstructor" onSubmit={updateinstructor} >
            <h2> Update Your Info</h2>

            <label>First Name:</label>
            <input
            type="text"
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
            />

            <label>Last name:</label>
            <input
            type="text"
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
            />
            <label>New Email :</label>
            <input
            type="text"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            />
             <label>New Biography :</label>
            <input
            type="text"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}
            />
             <h4>Please Select A Country:</h4>
      <br></br>
      <Select options={options} value={value} onChange={changeHandler} />

            <button>Update Info</button>
        </form>
    )

}

export default UpdateInstructInfo