interface IBox {
    title: string;
    titleAddition?: string;
    subTitle?: string;
    bulletPoints?: string[];
    description?: string;
    tags?: string[];
}

function Box({
    title,
    titleAddition,
    subTitle,
    bulletPoints,
    description,
    tags,
}: IBox) {
    return (
        <div className="box">
            <div className="title">
                <p>{title}</p>
                {titleAddition && (
                    <>
                        <p>&nbsp;•&nbsp;&nbsp;</p>
                        <p>{titleAddition}</p>
                    </>
                )}
            </div>
            {description && (
                <div>
                    <p className="description">{description}</p>
                </div>
            )}
            {subTitle && <p className="date">{subTitle}</p>}
            {bulletPoints &&
                bulletPoints.map((bulletDescription) => {
                    return (
                        <div className="point">
                            <p>&nbsp;•&nbsp;&nbsp;</p>
                            <p className="description">{bulletDescription}</p>
                        </div>
                    );
                })}
            {tags && (
                <div className="tags">
                    {tags.map((tagContent) => {
                        return <p>{tagContent}</p>;
                    })}
                </div>
            )}
        </div>
    );
}

export default Box;
