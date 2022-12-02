import { useEffect,useState } from "react"
import YoutubeEmbed  from "../components/YoutubeEmbed"
const CourseContent = () =>{
    const [subtitles,setSubtitles] = useState(null)
    useEffect(()=>{
       

        const getsubtitles  = async ()=>{
            const params = new URLSearchParams(window.location.search);
       const courseid = params.get('courseId');
       console.log(courseid)

            const response = await fetch(`/api/trainees/getsubtitles?courseid=${courseid}`)
            const json = await response.json()
            console.log(json)

          if(response.ok){
                setSubtitles(json)
            }

        }

        getsubtitles()

    },[])
    return(
        <div className="coursecontent">
            
            {subtitles && subtitles.map((subtitle)=>(
                                       <div key={subtitle._id}>
                                       <p> Subtitle: {subtitle.Title} </p>
                                       <p> 
           { subtitle.exercises.map((exercises)=>(
                                        <div key={exercises._id}>
                                       <p>Exercise : {exercises.title}</p>
                                       <p>Grade : {exercises.maxGrade}</p>
                                       <button>Go to Exercise </button>
                                       <button onClick={() => window.location.href=`/getanswers?subid=${subtitle._id}&id=${exercises._id}`} >View Exercise Answers </button>
                                        </div>
                                      ))}


            { subtitle.video.map((video)=>(

                  <div key={video._id}>
                    
                  <p>  <YoutubeEmbed embedId={video.link}/> </p>
                  <p>  {video.description}  </p>
                    </div>
            ))

            }  
                                       </p>
                                   </div>
            ))}
        </div>
    )
}
export default CourseContent