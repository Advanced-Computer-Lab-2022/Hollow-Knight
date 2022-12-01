import { useEffect,useState } from 'react';


const ViewInsReview = () => {

  
  
  const [instructors, setInstructors] = useState(null)


  useEffect(() =>{
    const handler = async() => {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get('userId');
        //e.preventDefault()
        const response = await fetch(`/api/instructors/reviews?userId=${userId}`);
        const json = await response.json()
        console.log(json)
        if(response.ok){
            setInstructors(json)
            return;
        }
        return;
    }
    handler()
},[])


  
    return (
      
     <div>
         {instructors && instructors.map((instructor)=>(
                                       <div key={instructor._id}>
                                         
                                         <p><strong>Instructor Rating:</strong>{instructor.overallRating}</p>
                                         <p> <strong> Reviews :</strong> </p>
                                     {instructor.review.map((data)=>(
                                        <div key={data._id}>
                                       
                                          <p> {data.reviews}  , {data.rating}</p>
                                        
                                        </div>
                                     ))}
                                      
                                   </div>
            ))}
     </div>
    )
  }
  
  export default ViewInsReview