import { IBox } from "../subcomponents/Box/Box";

 const experienceData = [
    {
        title: "Software Developer Intern",
        titleAddition: "Verzena",
        subTitle: "Aug 2024 - Present",
     
        tags: ["React", "Tailwind", "Adobe CC", "Figma"],
        showIcon: true,
        iconName: "verzena.png",
    },
    {
        title: "Software Engineer Co-op",
        titleAddition: "ConeTec",
        subTitle: "Jan 2024 - Aug 2024",
        bulletPoints: [
            "Utilized a robust technology stack including the application of advanced React and TypeScript techniques, Electron.js, Node.js for server-side logic, and Redux for state management.",
            "Decreased loading times by up to 80% on data-intensive pages through strategic migration and caching of calculations on the main process.",
            "Implemented new features for cone-penetration analysis and improved graph interactions, including custom point labeling and improved graph scaling logic.",
            
        ],
        tags: ["React", "TypeScript", "Electron.js", "Redux", "Node.js", "Fluent UI"],
        showIcon: true,
        iconName: "conetec-icon.jpg",
    },
    {
        title: "Software Engineer Intern",
        titleAddition: "UCW Labs, Farmer's Hive",
        subTitle: "Jan 2023 - May 2023",
        tags: ["Python", "Pandas", "NumPy"],
        showIcon: true,
        iconName: "fh-icon.png",
        bulletPoints: [
            "Conducted research and predicted irrigation requirements based off of historical sensor data provided by company and weather API.",
            "Designed and rigorously tested script with the objective of delivering the service to clients using company’s smart sensors, utilizing GitLab for version control.",
        ],
    },
    {
        title: "Graphic Designer, Creative Director",
        titleAddition: "P6",
        subTitle: "Sep 2019 - Aug 2022",
        tags: ["Adobe CC", "Blender"],
        showIcon: true,
        iconName: "p6-logo-2.png",
        bulletPoints: [
            "Managed and co-led a collective of designers in creating artwork for 30+ clients, resulting in sales totaling $20,000.",
            "Designed, documented, and engineered usable, web-related software for clients.",
            "Developed clear and concise communication skills through direct client interactions.",
        ],
    },
    {
        title: "Junior Developer, Lead UI/UX",
        titleAddition: "UBC Data Science Club",
        subTitle: "Sep 2023 - Apr 2024",
        tags: ["React", "Tailwind", "Trello","Adobe CC", "Figma"],
        showIcon: true,
        iconName: "dsci_logo.png",
        
    },
    {
        title: "VP Technology, Design Coordinator",
        titleAddition: "SFU Finance Student Association",
        subTitle: "Sep 2023 - Apr 2024",
        tags: ["WordPress", "CRM", "Adobe CC" ,"Figma"],
        showIcon: true,
        iconName: "finsa_logo.png",
        
    },
    {
        title: "Software Engineer, VP Design",
        titleAddition: "SFU Subvision Engineering",
        subTitle: "Sep 2023 - Jan 2024",
        tags: ["ROS", "Python", "Adobe CC", "Figma"],
        showIcon: true,
        iconName: "p6-logo-2.png",
    },
    {
        title: "Graphic Designer",
        titleAddition: "UBC Vietnamese Student Association",
        subTitle: "Sep 2021 - Jun 2022",
        tags: ["Adobe CC"],
        showIcon: true,
        iconName: "p6-logo-2.png",
    }
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
        imageName: "projects/mysips-proj-min.png",
  
    },
    {
        title: "Devpost Scraper",
        description:
            "Web scraper that collects submission data from any given number of Devpost hackathon pages and returns project data.",
        tags: ["Python", "spaCy", "NLP", "Flask"],
        showImage: true,
        imageName: "projects/devpost-proj-min.png",
    
    },
    {
        title: "Portfolio v1",
        description:
            "A single-paged application to host all my projects and designs in one place.",
        tags: ["JavaScript", "HTML/CSS", "History API", "GSAP"],
        showImage: true,
        imageName: "projects/portfoliov1-proj-min.png",
        urlLink: "https://andrewlai-v1.netlify.app/"       
    },
    {
        title: "Pola Party",
        description:
            "A web application that catalogues polaroid pictures. Created for personal use with the hopes of maximising user experience. Just a fun project that we hope helps us with learning Docker and virtual environments.",
        tags: ["Python", "Flask", "PostgreSQL", "Docker", "Azure"],
        showImage: true,
        imageName: "projects/polaparty-proj-min.png",
       
    },
    {
        title: "PCA 2024 & UBC DSCI Club",
        description:
            "Lead UI/UX designer for PCA 2024 and unreleased, new UBC Data Science club site.",
        tags: ["Typescript", "React", "Express", "Tailwind", "MUI"],
        showImage: true,
        imageName: "projects/ubcdsci-proj-min.png",
   
    },
    {
        title: "Irrigation Estimator",
        description:
            "Implemented Penman-Montieth equation to approximate net evapotranspiration from meteorological data.",
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