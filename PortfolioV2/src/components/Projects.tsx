import Box from "./subcomponents/Box";
import ViewMore from "./subcomponents/ViewMore";
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
            "Web scraper that collects submission data from any given number of Devpost hackathon pages and returns project data.",
        tags: ["Python", "spaCy", "NLP", "Flask"],
        showImage: true,
        imageName: "devpost-proj.png",
    },
    {
        title: "Portfolio V1",
        description:
            "A poorly coded single-paged application to host all my projects and designs in one place. ",
        tags: ["JavaScript", "HTML/CSS", "History API", "GSAP"],
        showImage: true,
        imageName: "portfoliov1-proj.png",
    },
    // {
    //     title: "Pola Party",
    //     description:
    //         "Website application that records and stores drinks from your favourite beverage locations.",
    //     tags: [
    //         "React",
    //         "TypeScript",
    //         "HTML/CSS",
    //         "Express",
    //         "Node.js",
    //         "MySQL",
    //         "Passport.JS",
    //     ],
    //     showImage: true,
    //     imageName: "polaparty-proj.png",
    // },
    {
        title: "OutfitLB",
        description:
            "Desktop app that stores and manages clothing, outfits, and closets.",
        tags: ["Python", "MongoDB", "PyMongo", "Tkinter", "scikit-learn"],
        showImage: true,
        imageName: "outfitlb-proj.png",
    },
];
function Projects() {
    return (
        <div id="projects" className="section-wrap">
            <p className="caps section-title gradient-text boldest">PROJECTS</p>

            <div>
                {projectData &&
                    projectData.map((projectItem) => {
                        return <Box {...projectItem} />;
                    })}

                <ViewMore linkTo="projects" />
            </div>
        </div>
    );
}

export default Projects;
