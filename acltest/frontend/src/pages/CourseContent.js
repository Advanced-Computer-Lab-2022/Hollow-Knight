import { useEffect, useState } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import ViewVideo from "../components/ViewVideo";
import { Typography } from "@mui/material";
import ViewSubtitles from "../components/ViewSubtitles";

const CourseContent = () => {
  const [subtitles, setSubtitles] = useState(null);
  const [maxProgress, setMaxProgress] = useState(null);
  useEffect(() => {
    const getsubtitles = async () => {
      const params = new URLSearchParams(window.location.search);
      const courseid = params.get("courseId");
      const userid = params.get("userId");
      //console.log(courseid);

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
  }, []);
  return (
    <div className="coursecontent">
      {subtitles &&
        subtitles.map((subtitle) => (
          <div key={subtitle._id}>
            <ViewSubtitles subtitle={subtitle} />
          </div>
        ))}
    </div>
  );
};
export default CourseContent;
