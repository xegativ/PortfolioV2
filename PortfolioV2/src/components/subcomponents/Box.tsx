interface IBox {
    title: string;
    titleAddition?: string;
    subTitle?: string;
    bulletPoints?: string[];
    description?: string;
    tags?: string[];
    showIcon?: boolean;
    iconName?: string;
    showImage?: boolean;
    imageName?: string;
}

function Box({
    title,
    titleAddition,
    subTitle,
    bulletPoints,
    description,
    tags,
    showIcon = false,
    iconName,
    showImage = false,
    imageName,
}: IBox) {
    return (
        <div className="box-wrapper">
            <div className="box">
                <div className="box-left">
                    <div className="title">
                        <p>{title}</p>
                        {titleAddition && (
                            <>
                                <p>&nbsp;•&nbsp;&nbsp;</p>
                                <p className="gradient-text boldest">
                                    {titleAddition}
                                </p>
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
                                    <p className="description">
                                        {bulletDescription}
                                    </p>
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
                {showImage ? (
                    <div
                        className="img"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(7, 7, 12, 1), rgb(7, 7, 12, 0) 40% ), url('images/${imageName}')`,
                        }}
                    ></div>
                ) : (
                    <></>
                )}
                {showIcon ? (
                    // <div
                    //     className="box-icon"
                    //     style={{
                    //         backgroundImage: iconUrl,
                    //     }}
                    // />
                    <img className="box-icon" src={`icons/${iconName}`}></img>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Box;
