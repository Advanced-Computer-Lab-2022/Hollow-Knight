import { useEffect } from "react"
const { useState } = require("react");
const ViewReview = () => {

    const [courses, setCourses] = useState("n")
    useEffect(()=>{
       

        const getCourses = async ()=>{
            const params = new URLSearchParams(window.location.search);
            const userId = params.get('userId');
            
            //console.log(userId);
            const response = await fetch(`/api/instructors/viewreviews?userId=${userId}`);
            const json = await response.json()
            

            if(response.ok){
             
                setCourses(json)
                console.log(json)
               
                console.log(json)
                
            }
          

        }
        getCourses()
        
     
    },[])
    return(
        <div className="ViewReview">
        
        <p><strong>Reviews : </strong>{courses[0].reviews}</p>
        
        </div>
    )
}

export default ViewReview