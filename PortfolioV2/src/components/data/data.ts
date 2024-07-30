import { IBox } from "../subcomponents/Box/Box";

 const experienceData = [
    {
        title: "Software Developer Co-op",
        titleAddition: "ConeTec",
        subTitle: "Jan 2024 - Aug 2024",
        bulletPoints: [
            "Utilized X and Y.",
            "Increased X load times by Y% by Z.",
        ],
        tags: ["React", "TypeScript", "Electron.js", "Redux"],
        showIcon: true,
        iconName: "conetec-icon.jpg",
    },
    {
        title: "Research Software Engineer Intern",
        titleAddition: "UCW Labs, Farmer's Hive",
        subTitle: "Jan 2023 - May 2023",
        tags: ["Python", "Pandas", "REST API"],
        showIcon: true,
        iconName: "fh-icon.png",
        bulletPoints: [
            "Conducted research and predicted irrigation requirements based off of historical sensor data provided by company and weather API.",
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
        title: "mySips v2",
        description:
            "Revamped site focused on user accessibility; in progress.",
        tags: [
            "React",
            "TypeScript",
            "HTML/CSS",
            "Firebase",
            "Redux",
            "Tailwind"
        ],
        showImage: true,
        imageName: "temp/temp.png",
  
    },
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
        title: "Portfolio v1",
        description:
            "A poorly coded single-paged application to host all my projects and designs in one place. ",
        tags: ["JavaScript", "HTML/CSS", "History API", "GSAP"],
        showImage: true,
        imageName: "portfoliov1-proj.png",
       
    },
    {
        title: "Pola Party",
        description:
            "A web application that catalogues polaroid pictures. Created for personal use with the hopes of maximising user experience. Just a fun project that we hope helps us with learning Docker and virtual environments.",
        tags: ["Python", "Flask", "PostgreSQL", "Docker", "Azure"],
        showImage: true,
        imageName: "temp/temp.png",
       
    },
    {
        title: "PCA 2024",
        description:
            "Lead UI/UX designer for PCA 2024, a conference held by UBC DSCI Club.",
        tags: ["Typescript", "React", "Express", "Tailwind", "MUI"],
        showImage: true,
        imageName: "temp/temp.png",
   
    },
    {
        title: "Irrigation Estimator",
        description:
            "Utilized information provided by Crop Evapotranspiration: Guidelines for Computing Crop Water Requirements (1998) by Rick G. Allen and Food and Agriculture Organization of the United Nations. Implemented Penman-Montieth equation to approximate net evapotranspiration from meteorological data.",
        tags: ["Python", "Matplotlib", "Requests", "REST API"],
        showImage: true,
        imageName: "temp/temp.png",
        
    },
    {
        title: "Crossy Road Matplotlib",
        description:
            "Desktop app that stores and manages clothing, outfits, and closets.",
        tags: ["Python", "MongoDB", "PyMongo", "Tkinter", "scikit-learn"],
        showImage: true,
        imageName: "temp/temp.png",
    },
    
] as IBox[];

export {projectData, experienceData};