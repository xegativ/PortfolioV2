import Box from "./subcomponents/Box";

function Involvement() {
    return (
        <div id="involvement" className="section-wrap">
            <p className="caps section-title gradient-text boldest">
                INVOLVEMENT
            </p>
            <div>
                <div className="section-grid">
                    <Box
                        hideHoverEffects
                        titleTag="Graphic Design"
                        showImage
                        imageName="xegativ-grid.png"
                        imageWidth="-webkit-fill-available"
                        hideLeft
                        boxHeight="500px"
                        imageTitleText="Graphic Design"
                    />
                </div>
                <div className="section-grid">
                    <Box
                        hideHoverEffects
                        titleTag="Clubs"
                        imageTitleText="Clubs"
                        imageName="VSA-poster.png"
                        boxHeight="300px"
                        hideLeft
                        showImage
                        imageWidth="-webkit-fill-available"
                    />
                    <Box
                        hideHoverEffects
                        titleTag="Photography"
                        imageTitleText="Photography"
                        imageName="test2.jpg"
                        boxHeight="300px"
                        hideLeft
                        showImage
                        imageWidth="-webkit-fill-available"
                    />
                </div>
            </div>
        </div>
    );
}

export default Involvement;
