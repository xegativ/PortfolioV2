import { Link } from "react-router-dom";
import { IBox } from "../subcomponents/Box/Box";
import BoxesDisplay from "../subcomponents/Box/BoxesDisplay";

interface IPageMoreProps {
    sectionName: string;
    boxesData: IBox[];
}

function PageMore(props: IPageMoreProps) {
    const { sectionName, boxesData } = props;
    return (
        <>
            <div className="background"></div>
            <div className="more-section">
                <Link className="back-button" to="/">
                    Back
                </Link>
                <div>
                    <h1 className="gradient-text">{sectionName}</h1>
                </div>
                <br />
                <div>
                    <div id="experience">
                        <BoxesDisplay boxesData={boxesData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageMore;
