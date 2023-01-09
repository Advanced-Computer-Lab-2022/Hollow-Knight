import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
const ViewMyCourses = () => {
  const [courses, setCourses] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const { user } = useAuthContext();
  const [requestSuccess,setRequest]=useState(false)
  console.log(user);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`/api/trainees/getmycourses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
    console.log("here");
    console.log(courses);
  }, [user]);

  const requestrefund = async (course) => {
    const searching = { userId, course };
    const response = await fetch("/api/trainees/requestrefund", {
      method: "POST",
      body: JSON.stringify(searching),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
    });
    const res = await response.json();
    if (response.ok) {
      console.log("Request succesful");
      setRequest(true)
    }
  };

  return (
    <div className="ViewMyCourses">
      <h1>My Courses</h1>
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
            <Card sx={{marginBottom:8,marginTop:4 ,borderRadius:8 }}>
            <Container  sx={{marginTop:5,marginBottom:5}}>
            <Typography align="center"  sx={{fontSize:35,marginBottom:3}}>
              <strong> {course.title} </strong>
             &nbsp;&nbsp;
              </Typography>

              <Typography align="center" sx={{fontSize:25,marginBottom:3}} >
              Price : {course.price} &nbsp;&nbsp;
              </Typography>

              <Typography align="center"  sx={{fontSize:25,marginBottom:8}} >
              Progression: {course.traineeProgression}  % &nbsp;&nbsp;
            </Typography>
               &nbsp;&nbsp;
              <br></br>
              <Button sx={{marginRight:5,marginLeft:0,marginBottom:5,width:200}}
              variant="contained"
                onClick={() =>
                  (window.location.href = `coursecontent?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Go to Course
              </Button>
              <Button sx={{marginRight:5,marginLeft:5,marginBottom:5,width:200}}
              variant="contained"
                onClick={() =>
                  (window.location.href = `rateinstructor?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Rate Instructor
              </Button>
              <Button sx={{marginRight:5,marginLeft:5,marginBottom:5,width:200}}
              variant="contained"
                onClick={() =>
                  (window.location.href = `/ratecourse?courseId=${course._id}&&userId=${userId}`)
                }
                key={course._id}
                margin="normal"
                padding="normal"
              >
                Rate Course
              </Button>
             
              <Button sx={{marginRight:5,marginLeft:5,marginBottom:5,width:200}}
                variant="contained" onClick={() => requestrefund(course)}>
                {!requestSuccess&&<>Get A Refund</>}
                {requestSuccess&&<>Requested</>}
              </Button>
              <Button sx={{marginRight:5,marginLeft:5,marginBottom:5,width:200}}
              variant="contained"
                onClick={() =>
                  (window.location.href = `/report?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Report Course
              </Button>


              {course.traineeProgression == 100 && (
                <Button sx={{marginLeft:5,marginBottom:5,width:200}}
                variant="contained"
                  onClick={() =>
                    (window.location.href = `coursecertificate?courseId=${course._id}&&userId=${userId}`)
                  }
                >
                  Certificate
                </Button>
              )}

              </Container>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default ViewMyCourses;
