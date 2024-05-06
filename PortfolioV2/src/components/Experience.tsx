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
        },
        {
            title: "Research Software Engineer",
            titleAddition: "UCW Labs, Farmer's Hive",
            subTitle: "Sep 2023 - Present",
            tags: ["Python", "Pandas", "REST API"],
        },
        {
            title: "Graphic Designer and Creative Director",
            titleAddition: "P6",
            subTitle: "Sep 2023 - Present",
            tags: ["Adobe CC", "Blender"],
        },
    ];
    return (
        <div id="experience" className="section-wrap">
            <p className="caps section-title">EXPERIENCE</p>
            <div>
                {experienceData &&
                    experienceData.map((experienceItem) => {
                        return <Box {...experienceItem} />;
                    })}

                <ViewMore />
            </div>
        </div>
    );
}

export default Experience;
