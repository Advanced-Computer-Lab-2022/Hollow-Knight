import { Container, Icon } from "@mui/material";
import ViewVideo from "../components/ViewVideo";
import { Button, Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState ,useEffect} from "react";

const ViewSubtitles = ({ subtitle }) => {
  const [view, setView] = useState("false");
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseId");


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
            <Container key={exercises._id}>


              <p> {exercises.title}</p>
              <p>Grade : {exercises.maxGrade}</p>

              <Button variant="contained"
                onClick={() =>
                  (window.location.href = `/getanswers?subid=${subtitle._id}&id=${exercises._id}`)
                }
              >
                Go to Exercise
              </Button>
            </Container>
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
