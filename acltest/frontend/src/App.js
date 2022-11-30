import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Createuser from "./pages/Createuser";
import SelectCountry from "./pages/SelectCountryPage";
import ViewCourses from "./pages/ViewCourses";
import ViewPrice from "./pages/PricesPage";
import ViewCoursesWithPrice from "./pages/ViewCoursesWithPrice";
import CreateCourse from "./pages/createcourse";
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createuser />} />
            <Route path="/selectcountry" element={<SelectCountry />} />
            <Route path="/viewallcourses" element={<ViewCourses />} />
            <Route
              path="/viewallcourseswithprices/:id"
              element={<ViewCoursesWithPrice />}
            />
            <Route path="/price/:id" element={<ViewPrice />} />
            <Route path="/create/createcourse" element={<CreateCourse />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/addcourse" element={<Addcoursepage />} />
            <Route
              path="/instructor/coursedetails/:id"
              element={<Coursedetails />}
            />
            <Route path="/SearchCoursePage" element={<SearchCoursePage />} />
            <Route path="/InstructorHome" element={<GoInstructor />} />
            <Route path="/TraineeHome" element={<GoTrainee />} />
            <Route path="/TraineeHomePage" element={<TraineeHomePage />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/ViewReviews" element={<ViewReview />} />
            <Route path="/ratecourse" element={<RateCoursePage />} />
            <Route path="/rate/:id" element={<RateCourseCo />} />
            <Route path="/watchvideos" element={<WatchVideo />} />
            <Route path="/getgrade" element={<GetGrade />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
