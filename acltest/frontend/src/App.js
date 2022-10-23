import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Createuser from './pages/Createuser'
import CreateCourse from './pages/createcourse';
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
             
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
