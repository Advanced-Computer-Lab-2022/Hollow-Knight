import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Createuser from "./pages/Createuser";
import SelectCountry from "./pages/SelectCountryPage";
import ViewCourses from "./pages/ViewCourses";
import ViewPrice from "./pages/PricesPage";
import ViewCoursesWithPrice from "./pages/ViewCoursesWithPrice";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createuser />} />
            <Route path="/selectcountry/" element={<SelectCountry />} />
            <Route path="/viewallcourses" element={<ViewCourses />} />
            <Route
              path="/viewallcourseswithprices/:id"
              element={<ViewCoursesWithPrice />}
            />
            <Route path="/price/:id" element={<ViewPrice />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
