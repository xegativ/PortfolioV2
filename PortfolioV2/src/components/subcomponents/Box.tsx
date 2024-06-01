interface IBox {
    title: string;
    titleAddition?: string;
    subTitle?: string;
    bulletPoints?: string[];
    description?: string;
    tags?: string[];
    showIcon?: boolean;
    showImage?: boolean;
}

function Box({
    title,
    titleAddition,
    subTitle,
    bulletPoints,
    description,
    tags,
    showIcon = false,
    showImage = false,
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
                {showImage ? <div className="img"></div> : <></>}
                {showIcon ? <div className="box-icon" /> : <></>}
            </div>
        </div>
    );
}

export default Box;
