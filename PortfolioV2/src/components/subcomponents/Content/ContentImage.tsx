interface IContentImageProps {
    src: string;
    caption?: string;
}

function ContentImage(props: IContentImageProps) {
    const { src, caption } = props;
    return (
        <div>
            <img
                src={src}
                style={{
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                }}
            ></img>
            {caption ? (
                <p
                    style={{
                        fontStyle: "italic",
                        color: "var(--color-dark-light-grey)",
                        textAlign: "center",
                        paddingTop: "1em",
                    }}
                >
                    {caption}
                </p>
            ) : null}
        </div>
    );
}

export default ContentImage;
