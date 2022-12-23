import { Icon } from "@mui/material";
import ViewVideo from "../components/ViewVideo";
import { Button, Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState } from "react";

const ViewSubtitles = ({ subtitle }) => {
  const [view, setView] = useState("false");

  const viewclick = async () => {
    if (view == "false") {
      setView("true");
    } else if (view == "true") {
      setView("false");
    }
    console.log(view);
  };

  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowDropDownOutlinedIcon />}
        onClick={viewclick}
      >
        <Typography variant="h5" align="left" gutterBottom>
          {subtitle.Title}
        </Typography>
      </Button>
      {view == "true" && (
        <div>
          {subtitle.exercises.map((exercises) => (
            <div key={exercises._id}>
              <p>Exercise : {exercises.title}</p>
              <p>Grade : {exercises.maxGrade}</p>
              <button>Go to Exercise </button>
              <button
                onClick={() =>
                  (window.location.href = `/getanswers?subid=${subtitle._id}&id=${exercises._id}`)
                }
              >
                View Exercise Answers{" "}
              </button>
            </div>
          ))}

          {subtitle.video.map((video) => (
            <div key={video._id}>
              <ViewVideo video={video} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewSubtitles;
