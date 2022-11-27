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
import Login from './pages/login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Passwordreset from './pages/Passwordreset';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
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
              path="/resetpassword"
              element={<Passwordreset/>}
            />

             
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
