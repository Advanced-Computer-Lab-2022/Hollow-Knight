import { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { useAuthContext } from "../hooks/useAuthContext";
const WatchVideo = () => {
  const [title, setCourseTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [videos, setVideos] = useState([]);
  const { user } = useAuthContext();
  const handler = async (e) => {
    e.preventDefault();

    await fetch("/api/trainees/coursevideos", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ title, subTitle }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });

    console.log(videos);
  };
  return (
    <form className="CourseVideos" onSubmit={handler}>
      <label>Please Select A Course:</label>
      <input
        type="text"
        onChange={(e) => setCourseTitle(e.target.value)}
        value={title}
      />
      <br></br>
      <label>Please Select A Subtitle:</label>
      <input
        type="text"
        onChange={(e) => setSubTitle(e.target.value)}
        value={subTitle}
      />
      <br></br>
      <button>View Videos</button>
      <div>
        {videos &&
          videos.map((video) => (
            <div key={video._id}>
              <p>
                <YoutubeEmbed embedId={video.link} /> &nbsp;&nbsp;
                <strong>Description: </strong>
                <br></br>
                {video.description} &nbsp;&nbsp;
              </p>
            </div>
          ))}
      </div>
    </form>
  );
};
export default WatchVideo;
