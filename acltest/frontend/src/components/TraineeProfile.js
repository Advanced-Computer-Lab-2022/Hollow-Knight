import { useState,useMemo } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
// use Memo
import Select from "react-select";
import countryList from "react-select-country-list";
//

const TraineeProfile = () => {
    const[first_name,setFirst_name]=useState(null)
    const[last_name,setLast_name]=useState(null)
    const [mail, setMail] = useState('')
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

    const updatetrainee = async (e) => {
        
        e.preventDefault()

        const trainee = {first_name, last_name,mail,country,countryAbb}

        const response = await fetch('/api/trainees/updateinfo', {
            method: 'POST',
            body: JSON.stringify(trainee),
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
        console.log('trainee changed', man)

        }

    }

    return (
        <form className="UpdateInstructor" onSubmit={updatetrainee} >
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
             <h4>Please Select A Country:</h4>
      <br></br>
      <Select options={options} value={value} onChange={changeHandler} />

            <button>Update Info</button>
        </form>
    )

}

export default TraineeProfile