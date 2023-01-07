import React from "react";
import { Button, Typography } from "@mui/material";
import YouTube from "react-youtube";
import { Container } from "@mui/system";
import YoutubeEmbed from "../components/YoutubeEmbed";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import Box from "@mui/material/Box";
import { useAuthContext } from "../hooks/useAuthContext";

const { useState } = require("react");

const ViewVideo = ({ video }) => {
  const [note, setNote] = useState("false");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const { user } = useAuthContext();
  var endVideoFlag = false;
  const handleEnd = async () => {
    //e.preventDefault();
    //endVideoFlag = true;
    console.log(endVideoFlag);
    const response = await fetch("/api/trainees/increasetraineeprog", {
      method: "PATCH",
      body: JSON.stringify({
        courseId: courseId,
        videoId: video._id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    console.log(json);
  };
  const notes = async () => {
    if (note == "false") {
      setNote("true");
    } else if (note == "true") {
      setNote("false");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");

    if (title && body) {
      const fileData = body;
      const blob = new Blob([fileData], { type: "text/plain" });
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = title + ".txt";
      alink.click();
      setBody("");
      setTitle("");
    }
  };

  return (
    <Container
      sx={{
        "& > :not(style)": { marginTop: 10, marginBottom: 10 },
      }}
    >
      <div>
        <Typography
          align="center"
          sx={{
            "& > :not(style)": { marginBottom: 3 },
          }}
        >
          <p>
            {" "}
            <YouTube videoId={video.link} onEnd={handleEnd} />{" "}
          </p>
          <p>{video.description} </p>
        </Typography>

        <Button onClick={notes} startIcon={<AddIcon />}>
          Add Notes
        </Button>

        {note == "true" && (
          <div>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                label="Notes Title"
                variant="outlined"
                color="primary"
                fullWidth
                required
                sx={{
                  "& > :not(style)": { marginTop: 4 },
                }}
              />

              <TextField
                onChange={(e) => setBody(e.target.value)}
                label="Notes body"
                variant="outlined"
                color="primary"
                fullWidth
                required
                multiline
                rows={7}
                sx={{
                  "& > :not(style)": { marginTop: 2, marginBottom: 2 },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                startIcon={<SouthOutlinedIcon />}
              >
                Download
              </Button>
            </form>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ViewVideo;
