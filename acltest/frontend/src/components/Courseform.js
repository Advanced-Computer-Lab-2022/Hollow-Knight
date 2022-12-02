import { useState } from "react";

const Courseform =()=>{

   const [title,setTitle]=useState('')
   const [price,setPrice]=useState('')
   const [subject,setSubject]=useState('')

   const [summary,setSummary]=useState('')
 
   const [total_hours,setTotal_hours]=useState('')

   const [error,setError]=useState(null)
   
   
   const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {title,price,subject,summary,total_hours}
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);
    const response = await fetch(`/api/instructors/addcourse?userId=${userId}`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setPrice('')
      setSubject('')
      setSummary('')
      setTotal_hours('')
      console.log('new course added:', json)
    }
   }
 return(
    <form className="create" onSubmit={handleSubmit}>
        <h1>
            Add a new Course
        </h1>
        <label>Course Title : (required)</label>
        <input
        type="text"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        />

        <label>Price : (required)</label>
        <input
        type="number"
        onChange={(e)=> setPrice(e.target.value)}
        value={price}
        />

      <label>Subject :</label>
        <input
        type="text"
        onChange={(e)=> setSubject(e.target.value)}
        value={subject}
        />

      
         <label>Summary : (required)</label>
        <input
        type="text"
        onChange={(e)=> setSummary(e.target.value)}
        value={summary}
        />

    
        <label>Total Hours : </label>
        <input
        type="Number"
        onChange={(e)=> setTotal_hours(e.target.value)}
        value={total_hours}
        />


        <button>Add Course</button>
        {error && <div className="error">{error}</div>}
    </form>
 )

}

export default Courseform 