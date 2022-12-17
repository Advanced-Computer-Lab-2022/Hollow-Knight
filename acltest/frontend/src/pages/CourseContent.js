import { useEffect,useState } from "react"
import YoutubeEmbed  from "../components/YoutubeEmbed"
import ViewVideo from "../components/ViewVideo"
import { Typography } from "@mui/material"
import ViewSubtitles from "../components/ViewSubtitles"
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
                                      
                                      <ViewSubtitles subtitle={subtitle}/>
                                   </div>
            ))}
        </div>
    )
}
export default CourseContent