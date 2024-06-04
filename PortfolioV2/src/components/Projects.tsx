import Box from "./subcomponents/Box";
import ViewMore from "./subcomponents/ViewMore";

function Projects() {
    const projectData = [
        {
            title: "mySips",
            description:
                "Website application that records and stores drinks from your favourite beverage locations.",
            tags: [
                "React",
                "TypeScript",
                "HTML/CSS",
                "Express",
                "Node.js",
                "MySQL",
                "Passport.JS",
            ],
            showImage: true,
            imageName: "mysips-proj.png",
        },
        {
            title: "Devpost Scraper",
            description:
                "Website application that records and stores drinks from your favourite beverage locations.",
            tags: [
                "React",
                "TypeScript",
                "HTML/CSS",
                "Express",
                "Node.js",
                "MySQL",
                "Passport.JS",
            ],
            showImage: true,
            imageName: "devpost-proj.png",
        },
        {
            title: "Pola Party",
            description:
                "Website application that records and stores drinks from your favourite beverage locations.",
            tags: [
                "React",
                "TypeScript",
                "HTML/CSS",
                "Express",
                "Node.js",
                "MySQL",
                "Passport.JS",
            ],
            showImage: true,
            imageName: "polaparty-proj.png",
        },
    ];

    return (
        <div id="projects" className="section-wrap">
            <p className="caps section-title gradient-text boldest">PROJECTS</p>

            <div>
                {projectData &&
                    projectData.map((projectItem) => {
                        return <Box {...projectItem} />;
                    })}

                <ViewMore />
            </div>
        </div>
    );
}

export default Projects;
