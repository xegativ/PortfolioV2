import { useEffect, useState } from "react";
import Bio from "../subcomponents/Bio";
import { experienceData, projectData } from "../data/data";
import Section from "../subcomponents/Section";
import Socials from "../subcomponents/Socials";
import Involvement from "../subcomponents/Involvement";

function Home() {
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
                    window.location.hash = "#experience";
                    setExperienceVisible(true);
                } else {
                    setExperienceVisible(false);
                }

                if (
                    projectsEl.getBoundingClientRect().top <= projectsTop &&
                    involveEl.getBoundingClientRect().top > involveTop
                ) {
                    window.location.hash = "#projects";
                    setProjectVisible(true);
                } else {
                    // window.location.hash = "";
                    setProjectVisible(false);
                }

                if (involveEl.getBoundingClientRect().top <= involveTop) {
                    window.location.hash = "#involvement";
                    setInvolveVisible(true);
                } else {
                    // window.location.hash = "";
                    setInvolveVisible(false);
                }
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const sectionContent = [
        { sectionName: "experience", boxesData: experienceData.slice(0, 3) },
        { sectionName: "projects", boxesData: projectData.slice(0, 4) },
    ];

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
                    {sectionContent.map((sectionItem) => {
                        return (
                            <Section
                                sectionName={sectionItem.sectionName}
                                boxesData={sectionItem.boxesData}
                            />
                        );
                    })}
                    <Involvement />
                </div>
            </div>
        </>
    );
}

export default Home;
