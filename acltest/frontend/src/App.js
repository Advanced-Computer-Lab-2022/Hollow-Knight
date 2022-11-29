import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Createuser from './pages/Createuser'
import SelectCountry from './pages/SelectCountryPage';
import ViewCourses from './pages/ViewCourses'
import ViewPrice from './pages/PricesPage';
import ViewCoursesWithPrice from'./pages/ViewCoursesWithPrice'
import CreateCourse from './pages/createcourse';
import Instructor from '../src/pages/instructor';
import Addcoursepage from './pages/addcoursepage';
import Coursedetails from './pages/viewcoursedetails';
import SearchCoursePage from './pages/SearchCoursePage';
import GoInstructor from './pages/GoInstructor';
import Apps from './pages/Apps';
import ViewReview from './pages/ViewReview';
import UpdateInstructInfo from './pages/updateinstructorinfo';
import ReviewInstructor from './pages/ReviewInstructor';
import ViewMyCourses from './pages/ViewMyCourses';
import Discount from './pages/Discount';
import Subtitle from './pages/subtitlecreate';
import ViewMySubtitles from './pages/ViewMySubtitles';
import UploadVideo from './pages/uploadvideo';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
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
                path="/viewallcourseswithprices"
                element={<ViewCoursesWithPrice />}
              />
              <Route
                path="/price/:id"
                element={<ViewPrice />}
              />
                <Route path="/create/createcourse"
                element={<CreateCourse />}
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
             path="/InstructorHome"
             element={<GoInstructor/>}
             />
             <Route
             path="/apps"
             element={<Apps/>}
             />
              <Route
             path="/ViewReviews"
             element={<ViewReview/>}
             />
              <Route
             path="/ViewMyCourses"
             element={<ViewMyCourses/>}
             />
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
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
