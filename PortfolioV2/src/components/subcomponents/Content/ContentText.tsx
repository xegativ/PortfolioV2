import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
} from "react";

const ContentTextStyle = {
    fontFamily: '"Inter", sans-serif',
    fontWeight: "300",
    fontSize: "var(--font-size-medium)",
    lineHeight: "25px",
    color: "var(--color-grey)",
};

function ContentText(props: {
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
    return <p style={ContentTextStyle}>{props.children}</p>;
}

export default ContentText;
