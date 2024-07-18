import { IBox } from "../subcomponents/Box/Box";

 const experienceData = [
    {
        title: "Software Developer Co-op",
        titleAddition: "ConeTec",
        subTitle: "Jan 2024 - Present",
        // bulletPoints: [
        //     "Working on developing Pacific Conference on Artificial Intelligence 2024 web page and redesigning UBC Data Science Club main web page.",
        //     "Utilized Agile and Scrum methodology to enhance development efficiency.",
        // ],
        tags: ["React", "TypeScript", "Electron.js", "Redux"],
        showIcon: true,
        iconName: "conetec-icon.jpg",
    },
    {
        title: "Research Software Engineer Intern",
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
] as IBox[];

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
    {
        title: "OutfitLB",
        description:
            "Desktop app that stores and manages clothing, outfits, and closets.",
        tags: ["Python", "MongoDB", "PyMongo", "Tkinter", "scikit-learn"],
        showImage: true,
        imageName: "outfitlb-proj.png",
   
    },
    {
        title: "OutfitLB",
        description:
            "Desktop app that stores and manages clothing, outfits, and closets.",
        tags: ["Python", "MongoDB", "PyMongo", "Tkinter", "scikit-learn"],
        showImage: true,
        imageName: "outfitlb-proj.png",
    },
    {
        title: "OutfitLB",
        description:
            "Desktop app that stores and manages clothing, outfits, and closets.",
        tags: ["Python", "MongoDB", "PyMongo", "Tkinter", "scikit-learn"],
        showImage: true,
        imageName: "outfitlb-proj.png",
        
    },
] as IBox[];

export {projectData, experienceData};