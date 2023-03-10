import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Project1 from "./Project1";
// import Project2 from "./Project2";
import Project1 from "./features/project1/Project1";
import Project2 from "./features/project2/Project2";
import Project3 from "./features/project3/Project3";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project1">ToDO</Link>
            </li>
            <li>
              <Link to="/project2">Decilious recipes</Link>
            </li>
            <li>
              <Link to="/project3">Project 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/project1" element={<Project1 />} />
          <Route exact path="/project2" element={<Project2 />} />
          <Route exact path="/project3" element={<Project3 />} />
        </Routes>
        {/* <Route path="/project2" component={Project2} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
