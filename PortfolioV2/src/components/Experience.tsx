import Box from "./subcomponents/Box";
import ViewMore from "./subcomponents/ViewMore";

function Experience() {
    const experienceData = [
        {
            title: "Software Engineer",
            titleAddition: "ConeTec",
            subTitle: "Jan 2024 - Present",
            bulletPoints: [
                "Working on developing Pacific Conference on Artificial Intelligence 2024 web page and redesigning UBC Data Science Club main web page.",
                "Utilized Agile and Scrum methodology to enhance development efficiency.",
            ],
            tags: ["React", "TypeScript", "Electron.js", "Redux"],
            showIcon: true,
            iconName: "conetec-icon.jpg",
        },
        {
            title: "Research Software Engineer",
            titleAddition: "UCW Labs, Farmer's Hive",
            subTitle: "Sep 2023 - Present",
            tags: ["Python", "Pandas", "REST API"],
            showIcon: true,
            iconName: "fh-icon.png",
            bulletPoints: [
                "Predicted irrigation requirements based off of historical sensor data provided by company and weather API.",
                "Designed and rigorously tested script with the objective of delivering the service to clients using company’s smart sensors, utilizing GitLab for version control.",
            ],
        },
        {
            title: "Graphic Designer and Creative Director",
            titleAddition: "P6",
            subTitle: "Sep 2019 - Aug 2022",
            tags: ["Adobe CC", "Blender"],
            showIcon: true,
            iconName: "p6-logo-2.png",
            bulletPoints: [
                "Managed and co-led a collective of designers in creating artwork for clients, resulting in sales totaling $20,000.",
                "Designed, documented, and engineered usable, web-related software for clients.",
                "Developed clear and concise communication skills through direct client interactions.",
            ],
        },
    ];
    return (
        <div id="experience" className="section-wrap">
            <p className="caps section-title gradient-text boldest">
                EXPERIENCE
            </p>
            <div>
                {experienceData &&
                    experienceData.map((experienceItem) => {
                        return <Box {...experienceItem} />;
                    })}
            </div>
            <ViewMore />
        </div>
    );
}

export default Experience;
