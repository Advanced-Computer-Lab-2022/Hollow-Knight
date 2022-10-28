import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Createuser from './pages/Createuser'
import CreateCourse from './pages/createcourse';
import Instructor from '../src/pages/instructor';
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
                path="/create/createcourse"
                element={<CreateCourse />}
              />
              <Route
                path="/instructor"
                element={<Instructor />}
              />
             
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
