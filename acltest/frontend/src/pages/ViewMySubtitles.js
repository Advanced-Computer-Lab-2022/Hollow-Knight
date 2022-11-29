import { useEffect } from "react"
const { useState } = require("react");
const ViewMySubtitles = () => {

    const [subtitles, setSubtitles] = useState(null)
    const [course, setcourse] = useState(null)
    useEffect(()=>{
       

        const viewSubtitles = async ()=>{
          console.log("bitch")
            const params = new URLSearchParams(window.location.search);
            const courseId = params.get('courseId');
            console.log(courseId)
            const response = await fetch(`/api/instructors/viewmysubtitles?courseId=${courseId}`);
            const result = await response.json()
            setcourse(courseId)

            
            
            if(response.ok){
                setSubtitles(result)
                console.log(result)
                
            }
          

        }
        viewSubtitles()
        
     
    },[])
    return(
      <div className="courses">
          {subtitles && subtitles.map((subtitle)=>(
                                     <div key={subtitle._id}>
                                     <p ><strong>Subtitle:</strong>{subtitle.Title} &nbsp;&nbsp;
                                     </p>
                                     <button variant="contained"
            onClick={() => window.location.href=`/uploadvideo?subtitleId=${subtitle._id}`} key={subtitle._id}
              margin="normal"
              padding="normal">
              Upload Video
                      </button>
                                 </div>
          ))}
          {
                    <div>
                    <h2>Add Subtitle</h2>
                        
                      <button variant="contained"
                      onClick={() => window.location.href=`/addsubtitle?courseId=${course}`} key={course}
                        margin="normal"
                        padding="normal">
                        Add Subtitle
                        
                                </button>
                                </div>

                        
          }
          
      </div>
  )
}
    


export default ViewMySubtitles