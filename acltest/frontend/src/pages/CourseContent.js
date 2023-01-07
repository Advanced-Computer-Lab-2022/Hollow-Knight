import { useEffect, useState } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import ViewVideo from "../components/ViewVideo";
import { Typography,Button } from "@mui/material";
import ViewSubtitles from "../components/ViewSubtitles";


const CourseContent = () => {
  const [subtitles, setSubtitles] = useState(null);
  const [maxProgress, setMaxProgress] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseId");
 

    const getsubtitles = async () => {
  
      const response = await fetch(
        `/api/trainees/getsubtitles?courseid=${courseid}`
      );
      const json = await response.json();
      //console.log(json);

      const courseResponse = await fetch(
        `/api/courses/coursedetails/${courseid}`
      );
      const courseJSON = await courseResponse.json();
      console.log(courseJSON);

      if (response.ok) {
        setSubtitles(json);
      }
      if (courseResponse.ok) {
        setMaxProgress(courseJSON.maxProgress);
      }
    };
    getsubtitles();

  return (
    <div className="coursecontent">
      
      {subtitles &&
        subtitles.map((subtitle) => (
          <div key={subtitle._id}>
            <ViewSubtitles subtitle={subtitle} />
          </div>
        ))}


<Button variant="contained" sx={{ marginBottom: 4 }}
        onClick={() =>
          (window.location.href = `/gotoexam?courseid=${courseid}`)
       }
      >
        Take Exam
      </Button>

    </div>
  );
};
export default CourseContent;
