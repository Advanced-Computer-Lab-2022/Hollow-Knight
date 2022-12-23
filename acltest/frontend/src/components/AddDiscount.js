import { useState } from "react";

const AddDiscount =()=>{

   const [percent,setPercent]=useState('')
   const [startm,setStartm]=useState('')
   const [startd,setStartd]=useState('')
   const [starty,setStarty]=useState('')
   const [endm,setEndm]=useState('')
   const [endd,setEndd]=useState('')
   const [endy,setEndy]=useState('')
   
   
   const discountgive = async (e) => {
    e.preventDefault()

    const disc = {percent,startm,startd,starty,endd,endm,endy}
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log(courseId)
    const response = await fetch(`/api/instructors/applydiscount?courseId=${courseId}`, {
      method: 'PATCH',
      body: JSON.stringify(disc),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    console.log(result)
    if (response.ok) {
     setEndd("")
     setEndm("")
     setEndy("")
     setStartd("")
     setStartm("")
     setStarty("")
     setPercent("")

    }
   }
 return(
    <form className="create" onSubmit={discountgive}>
        <h1>
            Apply Discount
        </h1>
        <label>percent: (required)</label>
        <input
        type="number"
        onChange={(e)=> setPercent(e.target.value)}
        value={percent}
        />

        <label>start month (required)</label>
        <input
        type="number"
        onChange={(e)=> setStartm(e.target.value)}
        value={startm}
        />
        
        <label>start day (required)</label>
        <input
        type="number"
        onChange={(e)=> setStartd(e.target.value)}
        value={startd}
        />
        
        <label>start year (required)</label>
        <input
        type="number"
        onChange={(e)=> setStarty(e.target.value)}
        value={starty}
        />

        
<label>end month (required)</label>
        <input
        type="number"
        onChange={(e)=> setEndm(e.target.value)}
        value={endm}
        />
        
        <label>end day (required)</label>
        <input
        type="number"
        onChange={(e)=> setEndd(e.target.value)}
        value={endd}
        />
        
        <label>end year (required)</label>
        <input
        type="number"
        onChange={(e)=> setEndy(e.target.value)}
        value={endy}
        />
        <button>Apply Discount</button>

    </form>
 )

}

export default AddDiscount