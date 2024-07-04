import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ExperienceMore from "./components/pages/ExperienceMore";
import ProjectsMore from "./components/pages/ProjectsMore";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route
                    path="/experience"
                    element={<ExperienceMore></ExperienceMore>}
                />
                <Route
                    path="/projects"
                    element={<ProjectsMore></ProjectsMore>}
                />
            </Routes>
        </>
    );
}

export default App;
