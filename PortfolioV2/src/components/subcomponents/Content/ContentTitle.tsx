import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
} from "react";

const ContentTitleStyle = {
    fontFamily: '"Inter", sans-serif',
};

function ContentTitle(props: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined;
}) {
    return (
        <h1 className="gradient-text" style={ContentTitleStyle}>
            {props.children}
        </h1>
    );
}

export default ContentTitle;
