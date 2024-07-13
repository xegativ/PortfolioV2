import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import PageMore from "./components/pages/PageMore";
import { experienceData, projectData } from "./components/data/data";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
                path="/experience"
                element={
                    <PageMore
                        sectionName="Experience"
                        boxesData={experienceData}
                    ></PageMore>
                }
            />
            <Route
                path="/projects"
                element={
                    <PageMore
                        sectionName="Projects"
                        boxesData={projectData}
                    ></PageMore>
                }
            />
        </Routes>
    );
}

export default App;
