import { useEffect, useState } from "react";

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

            const projectsTop = 0.3125;
            const experiencesTop = 0;
            const involveTop = 0.625;
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

    const handleClick = (e: any, targetId: any) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="main">
                <div className="main-left">
                    <div className="bio-wrap">
                        <h1>Andrew Lai</h1>
                        <h2>Computer Engineering @ SFU</h2>
                        <h3>
                            Striving to create a positive community around
                            myself for others, while also doing what makes me
                            happy: engineering.
                        </h3>
                    </div>

                    <div className="tob-wrap">
                        <div style={{ display: "flex" }}>
                            {experienceVisible ? (
                                <>
                                    <p style={{ marginRight: "10px" }}>•</p>
                                    <p className="tob in-view caps">
                                        <a
                                            href="#experience"
                                            onClick={(e) =>
                                                handleClick(e, "experience")
                                            }
                                        >
                                            EXPERIENCE
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ marginRight: "10px" }}>
                                        &nbsp;&nbsp;
                                    </p>
                                    <p className="tob caps">
                                        <a
                                            href="#experience"
                                            onClick={(e) =>
                                                handleClick(e, "experience")
                                            }
                                        >
                                            EXPERIENCE
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                        <div style={{ display: "flex" }}>
                            {projectVisible ? (
                                <>
                                    <p style={{ marginRight: "10px" }}>•</p>
                                    <p className="tob in-view caps">
                                        <a
                                            href="#projects"
                                            onClick={(e) =>
                                                handleClick(e, "projects")
                                            }
                                        >
                                            PROJECTS
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ marginRight: "10px" }}>
                                        &nbsp;&nbsp;
                                    </p>
                                    <p className="tob caps">
                                        <a
                                            href="#projects"
                                            onClick={(e) =>
                                                handleClick(e, "projects")
                                            }
                                        >
                                            PROJECTS
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>

                        <div style={{ display: "flex" }}>
                            {involveVisible ? (
                                <>
                                    <p style={{ marginRight: "10px" }}>•</p>
                                    <p className="tob in-view caps">
                                        <a
                                            href="#involvement"
                                            onClick={(e) =>
                                                handleClick(e, "involvement")
                                            }
                                        >
                                            INVOLVEMENT
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ marginRight: "10px" }}>
                                        &nbsp;&nbsp;
                                    </p>
                                    <p className="tob caps">
                                        <a
                                            href="#involvement"
                                            onClick={(e) =>
                                                handleClick(e, "involvement")
                                            }
                                        >
                                            INVOLVEMENT
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="socials-wrap">
                        <p>
                            <a
                                href="https://www.linkedin.com/in/andrew-lai-8b3969190/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://github.com/xegativ"
                                target="_blank"
                            >
                                Github
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.instagram.com/andrew._lai/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
                <div className="main-right">
                    <div className="left-space"></div>
                    <div className="right-info">
                        <div id="experience" className="experience-wrap">
                            <p className="caps">EXPERIENCE</p>
                            <div>
                                <div className="exp-box">
                                    <div className="exp-title">
                                        <p>Computing Team</p>
                                        <p>&nbsp;•&nbsp;</p>
                                        <p>SFU Satellite Design</p>
                                    </div>
                                    <p className="exp-date">
                                        Nov 2023 - Present
                                    </p>
                                </div>
                                <div className="exp-box">
                                    <div className="exp-title">
                                        <p>Full Stack Developer, Lead UI/UX</p>
                                        <p>&nbsp;•&nbsp;</p>
                                        <p>UBC Data Science Club</p>
                                    </div>
                                    <p className="exp-date">
                                        Sep 2023 - Present
                                    </p>
                                    <div className="point">
                                        <p>&nbsp;•&nbsp;&nbsp;</p>
                                        <p className="description">
                                            Working on developing Pacific
                                            Conference on Artificial
                                            Intelligence 2024 web page and
                                            redesigning UBC Data Science Club
                                            main web page.
                                        </p>
                                    </div>
                                    <div className="point">
                                        <p>&nbsp;•&nbsp;&nbsp;</p>
                                        <p className="description">
                                            Utilized Agile and Scrum methodology
                                            to enhance development efficiency.
                                        </p>
                                    </div>
                                    <div className="tags">
                                        <p>React</p>
                                        <p>JavaScript</p>
                                        <p>Tailwind CSS</p>
                                        <p>MUI</p>
                                        <p>Git</p>
                                        <p>Figma</p>
                                        <p>Trello</p>
                                    </div>
                                </div>
                                <div className="exp-box">
                                    <div className="exp-title">
                                        <p>Software Engineer</p>
                                        <p>&nbsp;•&nbsp;</p>
                                        <p>SFU SubVision Robotics</p>
                                    </div>
                                    <p className="exp-date">
                                        Sep 2023 - Present
                                    </p>
                                    <div className="point">
                                        <p>&nbsp;•&nbsp;</p>
                                        <p className="description">
                                            Working on developing Pacific
                                            Conference on Artificial
                                            Intelligence 2024 web page and
                                            redesigning UBC Data Science Club
                                            main web page.
                                        </p>
                                    </div>
                                    <div className="point">
                                        <p>&nbsp;•&nbsp;</p>
                                        <p className="description">
                                            Utilized React, Tailwind CSS, MUI,
                                            alongside an Agile and Scrum
                                            methodology to enhance development
                                            efficiency.
                                        </p>
                                    </div>
                                    <div className="tags">
                                        <p>Python</p>
                                        <p>ROS1</p>
                                        <p>Linux</p>
                                    </div>
                                </div>
                                <div className="exp-box">
                                    <div className="exp-title">
                                        <p>Technology Coordinator</p>
                                        <p>&nbsp;•&nbsp;</p>
                                        <p>SFU Finance Student Association</p>
                                    </div>
                                    <p className="exp-date">
                                        Sep 2023 - Present
                                    </p>
                                    <div className="tags">
                                        <p>WordPress</p>
                                        <p>Figma</p>
                                    </div>
                                </div>
                                <div className="exp-box">
                                    <div className="exp-title">
                                        <p>Research Software Engineer</p>
                                        <p>&nbsp;•&nbsp;</p>
                                        <p>UCW Labs, Farmer's Hive</p>
                                    </div>
                                    <p className="exp-date">
                                        Jan 2023 - May 2023
                                    </p>
                                    <div className="tags">
                                        <p>Python</p>
                                        <p>NumPy</p>
                                        <p>Pandas</p>
                                        <p>REST API</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="projects" className="projects-wrap">
                            <p className="caps">PROJECTS</p>
                            <div className="project-box">
                                <div>
                                    <p>Holonomic Submersible (ROV)</p>
                                    <p>SFU SubVision Robotics</p>
                                </div>

                                <p className="description">
                                    I have been leading a team of talented
                                    engineers in hopes of designing a holonomic
                                    submersible w/ a mechanical gripper for the
                                    2024 MateROV competition since May 2023.
                                    <br></br>
                                    <br></br>
                                    This submersible is about 1mx1m,
                                    manufactured using various materials
                                    (aluminum, acrylic, ABS), and is navigated
                                    using 6 thrusters/multisensor system.
                                    Utilizing ROS (Robot Operating System) with
                                    Python/Ubuntu/Pi4, we will be able to
                                    control the submersible as it completes
                                    various tasks underwater using a mechanical
                                    gripper arm.
                                </p>
                            </div>
                            <div className="project-box">
                                <p>Arduino Projects</p>
                            </div>
                            <div className="project-box">
                                <p>Robot Soccer</p>
                            </div>
                            <div className="project-box">
                                <p>Sumo Robot</p>
                            </div>
                            <div className="project-box">
                                <p>Lua Game Development</p>
                            </div>
                        </div>
                        <div id="involvement" className="involvement-wrap">
                            <p className="caps">INVOLVEMENT</p>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </>
    );
}

export default App;
