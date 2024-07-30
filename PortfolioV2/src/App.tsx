import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/PageHome";
import PageMore from "./components/pages/PageMore";
import { experienceData, projectData } from "./components/data/data";
import PageText from "./components/pages/PageText";
import {
    clubsPageContent,
    graphicDesignPageContent,
    photographyPageContent,
    uiuxPageContent,
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
            <Route
                path="/clubs"
                element={
                    <PageText
                        sectionName="Clubs"
                        pageContent={clubsPageContent}
                    ></PageText>
                }
            />
            <Route
                path="/uiux"
                element={
                    <PageText
                        sectionName="UI/UX"
                        pageContent={uiuxPageContent}
                    ></PageText>
                }
            />
        </Routes>
    );
}

export default App;
