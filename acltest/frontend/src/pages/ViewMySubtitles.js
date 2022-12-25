import { Button } from "@mui/material";
import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

const { useState } = require("react");
const ViewMySubtitles = () => {

  const [subtitles, setSubtitles] = useState(null)
  const [course, setcourse] = useState(null)
  const { user } =  useAuthContext();
  useEffect(() => {


    const viewSubtitles = async () => {
      console.log("b")
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId');
      console.log(courseId)
      if(user){
      const response = await fetch(`/api/instructors/viewmysubtitles?courseId=${courseId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`


        }
    });
      const result = await response.json()
      setcourse(courseId)



      if (response.ok) {
        setSubtitles(result)
        console.log(result)

      }}


    }
    viewSubtitles()


  }, [user])
  return (
    <div className="courses">
      {subtitles && subtitles.map((subtitle) => (
        <div key={subtitle._id}>
          <p ><strong>Subtitle:</strong>{subtitle.Title} &nbsp;&nbsp;
          </p>
          <button variant="contained"
            onClick={() => window.location.href = `/uploadvideo?subtitleId=${subtitle._id}`} key={subtitle._id}
            margin="normal"
            padding="normal">
            Upload Video
          </button>
          <button variant="contained"
            onClick={() => window.location.href = `/addexercise?subtitleId=${subtitle._id}`} key={subtitle._id}
            margin="normal"
            padding="normal">
            Add Exercise
          </button>
          <Button
           onClick={() => window.location.href = `/createexam?subtitleId=${subtitle._id}`} key={subtitle._id}
          variant="outlined">
           Add Exam
          </Button>
        </div>
      ))}
      {
        <div>
          <h2>Add Subtitle</h2>

          <button variant="contained"
            onClick={() => window.location.href = `/addsubtitle?courseId=${course}`} key={course}
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