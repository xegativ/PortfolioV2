import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/PageHome";
import PageMore from "./components/pages/PageMore";
import { experienceData, projectData } from "./components/data/data";
import PageText from "./components/pages/PageText";
import {
    graphicDesignPageContent,
    photographyPageContent,
} from "./components/data/contentData";

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
            <Route
                path="/graphic-design"
                element={
                    <PageText
                        sectionName="Graphic Design"
                        pageContent={graphicDesignPageContent}
                    ></PageText>
                }
            />
            <Route
                path="/photography"
                element={
                    <PageText
                        sectionName="Photography"
                        pageContent={photographyPageContent}
                    ></PageText>
                }
            />
        </Routes>
    );
}

export default App;
