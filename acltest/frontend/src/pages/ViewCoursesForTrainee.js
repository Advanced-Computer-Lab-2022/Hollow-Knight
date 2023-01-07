import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const ViewCoursesForTrainee = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const { user } = useAuthContext();
  const [type, setType] = useState(null);
  console.log(user);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses/findcoursesfortrainee", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        console.log(json)
        setCourses(json);
      }
    };
    const gettype= async() =>{
      console.log(user,"here")
     if(user){
      const response = await fetch("/api/courses/gettype", {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
          },
      });
      const json= await response.json();
      
      if (!response.ok) {
         setType("not found")
      }
      if(response.ok){      //1.update the context with the new user 2. update the loading state 3. update login state the user is logged in
          //save the user to local storage
          console.log(json)
          setType(json)
      }
    }
  }
    gettype();
    fetchCourses();
  }, [user]);
  const registerCorporateTrainee= async({course}) =>{
    console.log(user,"here")
   if(user){
    const response = await fetch("/api/trainees/addcoursetotrainee", {
        method: "POST",
        body:JSON.stringify({courseId:course._id}),
        headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
        },
    });
    const json= await response.json();
    navigate("/coursecontent?courseId="+course._id);
    if(response.ok){
    }

  }
}
  return (
    <div className="courses">
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
              <Typography align="center" sx={{fontSize:25,marginBottom:3}} >
              Total Hours : {course.total_hours} &nbsp;&nbsp;
              </Typography>
              <Typography align="center" sx={{fontSize:25,marginBottom:3}} >
              Total Hours :   {course.overallRating} &nbsp;&nbsp;
              </Typography>
              {type == "trainee"&&!course.registered&&<Button sx={{marginRight:0,marginLeft:85}}
              variant="contained"
                onClick={() =>
                  (window.location.href = `creditcardinfo?courseId=${course._id}&&userId=${userId}`)
                }
              >
                Pay For Course
              </Button>}
              {type == "corporate trainee"&&!course.registered&&<Button sx={{marginRight:0,marginLeft:85}}
              variant="contained"
                onClick={() =>registerCorporateTrainee({course})}
              >
                Register
              </Button>}
              {course.registered&&<Typography color="darkblue" align="center" sx={{fontSize:25,marginBottom:3,marginLeft:80}} >
              Registered
              </Typography>}
            </Container>
            </Card>
          </div>
        ))}
    </div>
  );
};
export default ViewCoursesForTrainee;
