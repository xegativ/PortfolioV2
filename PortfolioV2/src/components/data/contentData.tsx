import { PageContent } from "../pages/PageText";
import ContentImage from "../subcomponents/Content/ContentImage";
import ContentText from "../subcomponents/Content/ContentText";
import ContentTitle from "../subcomponents/Content/ContentTitle";

const graphicDesignPageContent = {
    tags: ["Updated 2024-07-16", "Adobe CC"],
    content: [
        <ContentText>
            I have always had an eye for nice aesthetic. From young, I would
            spend hours drawing and sketching on papers and desks. I have
            probably costed my parents hundreds in poorly half-drawn, scribbled
            papers.
        </ContentText>,

        <ContentText>
            In secondary school, I met a friend who introduced me to graphic
            design. As a 9th grader with no income and a new addiction to the
            online world of video games, I was ecstatic to hear that he created
            digital graphics for rappers and artists online for real money. Real
            money that could be irresponsibally spent on digital skins.
        </ContentText>,

        <ContentText>
            That friend would eventually invite me to a{" "}
            <span className="p-bold">online design collective</span> he created
            in which I partially helped managed as a Creative Director. In a
            way, we were a mini, student-run, design agency.
        </ContentText>,

        <ContentImage
            src="images/graphicdesign/xe-slant-min.png"
            caption="Graphics were created in the time frame of 2018-2020, ranging from $30 to $100+."
        />,

        <ContentText>
            Since this was a temporary side hustle/hobby during school, I
            managed to only peak at just above 300 followers. However, my posts
            were often fortunately reposted on large cover art Instagram
            accounts such as @AlbumArtArchive (before their rebranding), and
            gained acknowledgement by teams such as @StudioInnate.
        </ContentText>,

        <ContentText>
            Since then, I have slowed down my progress with graphic design.
            While my social media feeds are often filled with such content, my
            career has led me down a different path towards software and
            hardware development, leaving me with only a minimal amount of time
            to spare on other subjects.
        </ContentText>,

        <ContentImage
            src="images/graphicdesign/xe-clothing-min.png"
            caption="Various unused mockup designs, incorporating a grunge
                    aesthetic."
        />,
    ],
} as PageContent;

const photographyPageContent = {
    tags: ["Updated 2024-07-16", "Canon Rebel XSi", "Urbex"],
    content: [
        <ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </ContentText>,

        <ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
        </ContentText>,

        <ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
        </ContentText>,
        <ContentImage src="images/photography/IMG_6449.jpg" />,
        <ContentImage
            src="images/photography/IMG_6435.jpg"
            caption="Burnaby Area"
        />,
        <ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </ContentText>,
        <ContentImage
            src="images/photography/dt-roof.png"
            caption="Downtown Vancouver"
        />,
        <ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </ContentText>,
        <ContentImage src="images/photography/dt-blue.png" />,
        <ContentImage
            src="images/photography/science-world.png"
            caption="View of Downtown Vancouver from across Granville bridge"
        />,
        <ContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </ContentText>,
    ],
} as PageContent;

const clubsPageContent = {
    tags: ["Updated 2024-07-16", "UBC", "SFU", "Marketing", "Graphic Design"],
    content: [
        <ContentText>
            To me, what's worth more than the experience and prestige you gain
            from holding executive positions in clubs are the connections you
            make. Thus, I often partake in positions at clubs unrelated to my
            area of study, as what I value most are their varying perspectives.
        </ContentText>,
        <ContentText>
            This section includes some work I had completed at such clubs.
        </ContentText>,
        <ContentTitle>UBC VSA</ContentTitle>,
        <ContentImage
            src="images/clubs/club_vsa.png"
            caption="Merchandise advertisement designed for UBC's Vietnamese Student Association in the 2022-2023 school year."
        />,
        <ContentTitle>UBC CMSSA</ContentTitle>,
        <ContentImage
            src="images/clubs/cmssa_merch.png"
            caption="Merchandise advertisement designed for UBC's CMS Student Association in the 2022-2023 school year."
        />,
        <ContentImage
            src="images/clubs/cmssa_merch2.png"
            caption="Example posts made for club social media account."
        />,
        <ContentTitle>SFU SUBVISION</ContentTitle>,
        <ContentImage src="images/clubs/subvision_v1.png" />,
        <ContentImage src="images/clubs/subvision_v2.png" />,
        <ContentTitle>SFU FINSA</ContentTitle>,
        <ContentImage src="images/temp/temp_s.png" />,
        <ContentTitle>UBC DATA SCIENCE CLUB</ContentTitle>,
        <ContentImage src="images/temp/temp_s.png" />,
    ],
};

const uiuxPageContent = {
    tags: [],
    content: [<ContentText>Under construction.</ContentText>],
};

export {
    graphicDesignPageContent,
    photographyPageContent,
    clubsPageContent,
    uiuxPageContent,
};
