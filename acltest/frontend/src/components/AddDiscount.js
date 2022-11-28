import { useState } from "react";

const AddDiscount =()=>{

   const [discount,setDiscount]=useState('')
   const [duration,setDuration]=useState('')

   
   const discountgive = async (e) => {
    e.preventDefault()

    const disc = {discount,duration}
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log(courseId)
    const response = await fetch(`/api/instructors/applydiscount?courseId=${courseId}`, {
      method: 'POST',
      body: JSON.stringify(disc),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    console.log(result)
    if (response.ok) {
      setDiscount('')
      setDuration('')
    }
   }
 return(
    <form className="create" onSubmit={discountgive}>
        <h1>
            Apply Discount
        </h1>
        <label>Discount: (required)</label>
        <input
        type="text"
        onChange={(e)=> setDiscount(e.target.value)}
        value={discount}
        />

        <label>duration (required)</label>
        <input
        type="number"
        onChange={(e)=> setDuration(e.target.value)}
        value={duration}
        />
        <button>Apply Discount</button>

    </form>
 )

}

export default AddDiscount