import { IBox } from "./Box/Box";
import BoxesDisplay from "./Box/BoxesDisplay";
import ViewMore from "./ViewMore";

interface ISectionProps {
    sectionName: string;
    boxesData: IBox[];
}

function Section(props: ISectionProps) {
    const { sectionName, boxesData } = props;
    console.log(props);
    return (
        <div id={sectionName} className="section-wrap">
            <p className="caps section-title gradient-text boldest">
                {sectionName.toUpperCase()}
            </p>
            <BoxesDisplay boxesData={boxesData} />
            <ViewMore linkTo={`/${sectionName}`} />
        </div>
    );
}

export default Section;
