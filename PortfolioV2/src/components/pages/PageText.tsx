import { Link } from "react-router-dom";

export type PageContent = { content: JSX.Element[]; tags: string[] };

interface IPageMoreProps {
    sectionName: string;
    pageContent: PageContent;
}

const contentDivStyle = {
    paddingTop: "30px",
};

const ContentToPage = (content: JSX.Element[]) => {
    return content.map((contentItem) => {
        return <div style={contentDivStyle}>{contentItem}</div>;
    });
};

function PageText(props: IPageMoreProps) {
    const { sectionName, pageContent } = props;
    return (
        <>
            <div className="background"></div>
            <div className="page-text-wrapper">
                <Link className="back-button" to="/">
                    Back
                </Link>
                <div>
                    <h1 className="gradient-text">{sectionName}</h1>
                </div>
                <br></br>
                <div className="tags">
                    {pageContent.tags.map((tag) => {
                        return <p>{tag}</p>;
                    })}
                </div>

                {ContentToPage(pageContent.content)}
            </div>
        </>
    );
}

export default PageText;
