import { useState } from "react";

const Courseform =()=>{

   const [title,setTitle]=useState('')
   const [price,setPrice]=useState('')
   const [subject,setSubject]=useState('')
   const [subtitles,setSubtitles]=useState('')
   const [subtitles_hours,setSubtitles_hours]=useState('')
   const [summary,setSummary]=useState('')
   const [excercises,setExercises]=useState('')
   const [total_hours,setTotal_hours]=useState('')

   const [error,setError]=useState(null)
   
   
   const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {title,price,subject,subtitles,subtitles_hours,summary,excercises,total_hours}
    
    const response = await fetch('/api/instructors/addcourse', {
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
      setSubtitles('')
      setSubtitles_hours('')
      setExercises('')
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

         <label>Subtitles : (required)</label>
        <input
        type="text"
        onChange={(e)=> setSubtitles(e.target.value)}
        value={subtitles}
        />

        <label>Subtitles Hours : </label>
        <input
        type="Number"
        onChange={(e)=> setSubtitles_hours(e.target.value)}
        value={subtitles_hours}
        />

         <label>Summary : (required)</label>
        <input
        type="text"
        onChange={(e)=> setSummary(e.target.value)}
        value={summary}
        />

      <label>Excercises : </label>
        <input
        type="text"
        onChange={(e)=> setExercises(e.target.value)}
        value={excercises}
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