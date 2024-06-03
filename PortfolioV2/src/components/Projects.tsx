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
        },
    ];

    return (
        <div id="projects" className="section-wrap">
            <p className="caps section-title">PROJECTS</p>

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
