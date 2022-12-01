import { useEffect } from "react"
const { useState } = require("react");
const ViewReview = () => {
   
    const [title, setTitle] = useState('')
    const [courses, setCourses] = useState(null)
   
    
    
       
        const getCourses = async (e)=>{
            e.preventDefault() 
           
            const params = new URLSearchParams(window.location.search);
            const userId = params.get('userId');
          const searching={title}
            
            const response = await fetch(`/api/instructors/viewreviews?userId=${userId}`,{
                method: 'POST',
                body: JSON.stringify(searching),
                headers: {
                    'Content-Type' : 'application/json'
                }
    
            })
            const json = await response.json()
            console.log(json)
           

            if(response.ok){
                setCourses(json)
             
            }
        }
       
       
    
    return(
        <div className="ViewReview">
          <h1> Course Reviews </h1> 
       
       <form className="view" onSubmit={getCourses} >
       <label>Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <button>Search</button>  
            </form>
<h5> Available Reviews </h5> 
    
  
{courses && courses.map((course)=>(
        
<div  key={course._id}>
                                    
<p ><strong>Course Title : </strong>{course.title}</p> 
<p> <strong>Course Rating : </strong>{course.overallRating}</p>
<h4>Reviews</h4>                                 
<table id="creview">
  <tr>
    <th>Review</th>
    <th>Rating</th>
  </tr>
{course.review.map((data)=>(
<div key={data._id}>                                    
  <tr>
    <td>{data.reviews} </td>
    <td> {data.rating}</td>
   </tr>
 </div>
                                        
))}
</table>
                                       
</div>
))}
                 


                  
 </div>
    )
}

export default ViewReview