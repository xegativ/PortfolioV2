import { useEffect, useState } from "react";
import Bio from "./components/Bio";
import Socials from "./components/Socials";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Involvement from "./components/Involvement";

function App() {
    const [projectVisible, setProjectVisible] = useState(false);
    const [experienceVisible, setExperienceVisible] = useState(false);
    const [involveVisible, setInvolveVisible] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById("experience");

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
            setExperienceVisible(true);
        }

        const onScroll = () => {
            const projectsEl = document.getElementById("projects");
            const experiencesEl = document.getElementById("experience");
            const involveEl = document.getElementById("involvement");

            const projectsTop = 1;
            const experiencesTop = 0;
            const involveTop = 2;
            if (experiencesEl && projectsEl && involveEl) {
                console.log(
                    "Projects: ",
                    projectsEl.getBoundingClientRect().top
                );

                console.log(
                    "Experience: ",
                    experiencesEl.getBoundingClientRect().top
                );

                console.log(
                    "Involvement: ",
                    involveEl.getBoundingClientRect().top
                );

                if (
                    experiencesEl.getBoundingClientRect().top <=
                        experiencesTop &&
                    projectsEl.getBoundingClientRect().top > projectsTop
                ) {
                    setExperienceVisible(true);
                } else {
                    setExperienceVisible(false);
                }

                if (
                    projectsEl.getBoundingClientRect().top <= projectsTop &&
                    involveEl.getBoundingClientRect().top > involveTop
                ) {
                    setProjectVisible(true);
                } else {
                    setProjectVisible(false);
                }

                if (involveEl.getBoundingClientRect().top <= involveTop) {
                    setInvolveVisible(true);
                } else {
                    setInvolveVisible(false);
                }
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <div className="background"></div>
            <div className="main">
                <div className="main-left">
                    <Bio
                        projectVisible={projectVisible}
                        experienceVisible={experienceVisible}
                        involveVisible={involveVisible}
                    />
                    <Socials />
                </div>
                <div className="main-right">
                    <div className="left-space"></div>
                    <div className="right-info">
                        <Experience />
                        <Projects />
                        <Involvement />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
