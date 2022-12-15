import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Createuser from "./pages/Createuser";
import SelectCountry from "./pages/SelectCountryPage";
import ViewCourses from "./pages/ViewCourses";
import ViewPrice from "./pages/PricesPage";
import ViewCoursesWithPrice from "./pages/ViewCoursesWithPrice";
import Instructor from "../src/pages/instructor";
import Addcoursepage from "./pages/addcoursepage";
import Coursedetails from "./pages/viewcoursedetails";
import SearchCoursePage from "./pages/SearchCoursePage";
import GoInstructor from "./pages/GoInstructor";
import Apps from "./pages/Apps";
import ViewReview from "./pages/ViewReview";
import WatchVideo from "./pages/watchVideoPage";
import GetGrade from "./components/GetGrade";
import RateCoursePage from "./pages/RateCoursePage";
import RateCourseCo from "./components/RateCourseCo";
import GoTrainee from "./pages/GoTrainee";
import TraineeHomePage from "./pages/TraineeHomePage";
import AddExercises from "./components/AddExercises";
import UploadVideo from './pages/uploadvideo';
import ViewMySubtitles from './pages/ViewMySubtitles';
import Subtitle from './pages/subtitlecreate';
import Discount from './pages/Discount';
import UpdateInstructInfo from './pages/updateinstructorinfo';
import ViewMyCourses from './pages/ViewMyCourses';
import ReviewInstructor from './pages/ReviewInstructor';
import Question from './components/Question';

import CourseContent from './pages/CourseContent';
import ViewAnswers from './components/ViewAnswers';
import ViewInsReviews from './pages/ViewInsReviews';
import ViewContract from './pages/ViewContract';
import GetMyCourses from './pages/GetMyCourses';
import RateInstructor from './components/RateInstructor';
import Login from './pages/login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Passwordreset from './pages/Passwordreset';
import Forgotpassword from './components/Forgotpassword';
import Forgotpasswordtoken from './pages/Forgotpasswordtoken';
import AdminHomePage from "./pages/AdminHomePage";
import AdminApps from "./pages/AdminApps";
import ViewDetailsTrainee from "./pages/ViewDetailsTrainee";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <div className="pages">
            <Routes>


            <Route path="/InstructorHome" element={<GoInstructor />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/ViewReviews" element={<ViewReview />} />
            <Route path="/watchvideos" element={<WatchVideo />} />
            <Route path="/getgrade" element={<GetGrade />} />
            <Route path="/ratecourse" element={<RateCoursePage />} />
            <Route path="/rate/:id" element={<RateCourseCo />} />
            <Route path="/TraineeHomePage" element={<TraineeHomePage />} />
            <Route path="/addexercise" element={<AddExercises />} />
              <Route
             path="/Reviews"
             element={<ViewInsReviews/>}
             />
              <Route
             path="/ViewContract"
             element={<ViewContract/>}
             />
            
              <Route
                path="/"
                element={<Home />}
              />
                <Route
                path="/create"
                element={<Createuser />}
              />
                <Route
                path="/selectcountry"
                element={<SelectCountry />}
              />
              <Route
                path="/viewallcourses"
                element={<ViewCourses />}
              />
              <Route
                path="/viewallcourseswithprices/:id"
                element={<ViewCoursesWithPrice />}
              />
              <Route
                path="/price/:id"
                element={<ViewPrice />}
              />
               
              <Route
                path="/instructor"
                element={<Instructor />}
              />
                <Route 
              path="/addcourse" 
              element={<Addcoursepage />} 
            />
            <Route 
              path="/instructor/coursedetails/:id" 
              element={<Coursedetails />} 
            />
             <Route 
              path="/SearchCoursePage"
              element={<SearchCoursePage />} 
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
             <Route
              path="/resetpassword"
              element={<Passwordreset/>}
            />
             <Route
              path="/forgotpassword"
              element={<Forgotpassword/>}
            />
             <Route
              path="/forgotpassword/:id"
              element={<Forgotpasswordtoken/>}
            />
             
            <Route path = "/addquestion" element={<Question/>}/>
            <Route path = "/trainee" element={<GoTrainee/>}/>
         
            <Route path = "/viewmycourses" element={<ViewMyCourses/>}/>
            <Route path = "/coursecontent" element={<CourseContent/>}/>
            <Route path = "/getanswers" element={<ViewAnswers/>}/>
              <Route
             path="/updateinfo"
             element={<UpdateInstructInfo/>}
             />
              <Route
             path="/reviewinstructor"
             element={<ReviewInstructor/>}
             />
              <Route 
              path="/applydiscount" 
              element={<Discount/>} 
            />
              <Route 
              path="/addsubtitle" 
              element={<Subtitle/>} 
            />
                          <Route 
              path="/viewsubtitles" 
              element={<ViewMySubtitles/>} 
            />
              <Route 
              path="/uploadvideo" 
              element={< UploadVideo/>} 
            />
            <Route path = "/addquestion" element={<Question/>}/>

            <Route path = "/getmycourses" element={<GetMyCourses/>}/>

            <Route path = "/rateinstructor" element={<RateInstructor/>}/>

             <Route path = "/adminhome" element={<AdminHomePage/>}/>

             <Route path = "/adminapps" element={<AdminApps/>}/>
             
             
             <Route path = "/traineesearchcourse/:id" element={<ViewDetailsTrainee/>}/>
             
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
