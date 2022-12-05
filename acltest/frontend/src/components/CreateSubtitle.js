import { useState } from "react";

const CreateSubtitle =()=>{

   const [name,setName]=useState('')
   const [hour,setHour]=useState('')

   
   const subtitlemake = async (e) => {
    e.preventDefault()

    const sched = {name,hour}
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log(courseId)
    const response = await fetch(`/api/instructors/addsubtitle?courseId=${courseId}`, {
      method: 'POST',
      body: JSON.stringify(sched),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    console.log(result)
    if (response.ok) {
      setName('')
      setHour('')
    }
   }
 return(
    <form className="create" onSubmit={subtitlemake}>
        <h1>
            Create Subtitle
        </h1>
        <label>Title: (required)</label>
        <input
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={name}
        />

        <label>Subtitle Hours: (required)</label>
        <input
        type="number"
        onChange={(e)=> setHour(e.target.value)}
        value={hour}
        />
        <button>Create Subtitle</button>

    </form>
 )

}

export default CreateSubtitle