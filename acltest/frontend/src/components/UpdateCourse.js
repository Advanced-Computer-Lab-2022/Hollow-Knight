import { useState } from "react";

const UpdateCourse =({courses})=>{

   const [title,setTitle]=useState("")
   const [price,setPrice]=useState("")
   const [subject,setSubject]=useState("")

   const [summary,setSummary]=useState("")
   
   const [total_hours,setTotal_hours]=useState("")
   
  

   
   const updatecourseClick = async(e)=>{

    e.preventDefault()

    const course = {title,price,subject,summary,total_hours}
    //const params = new URLSearchParams(window.location.search);
    //const userId = params.get('userId');
    //console.log(userId);
    const response = await fetch(`/api/instructors/updatecourse/`+courses._id+`?userId=${courses.author}`, {
      method: 'PATCH',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    console.log("here")
    if (!response.ok) {
     console.log("error")
    }
    console.log("here")
    if (response.ok) {
        
      
      setTitle('')
      setPrice('')
      setSubject('')
      setSummary('')
     
      setTotal_hours('')
      console.log(' course updated:', json)
    }
}

 return(
    <div className="update">

      

        <h1>
            Insert the data to updated
        </h1>
       <label>Course Title : </label>
        <input
        type="text"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        />
    
 
      <label>Price : </label>
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
    


         <label>Summary : </label>
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

          <button onClick={updatecourseClick}> Update Course </button >
   </div>
      )
}

export default UpdateCourse 