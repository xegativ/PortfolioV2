import Box from "../Box/Box";

function SectionInvolvement() {
    return (
        <div id="involvement" className="section-wrap">
            <p className="caps section-title gradient-text boldest">
                INVOLVEMENT
            </p>
            <div>
                <div className="section-grid">
                    <Box
                        to="/graphic-design"
                        hideHoverEffects
                        titleTag="Graphic Design"
                        showImage
                        imageName="involvement-xe.png"
                        imageWidth="-webkit-fill-available"
                        hideLeft
                        boxHeight="400px"
                        imageTitleText="Graphic Design"
                    />
                </div>
                <div className="section-grid">
                    <Box
                        hideHoverEffects
                        titleTag="Clubs"
                        imageTitleText="Clubs"
                        imageName="involvement-vsa.png"
                        boxHeight="200px"
                        hideLeft
                        showImage
                        imageWidth="-webkit-fill-available"
                        to="/clubs"
                    />
                    <Box
                        to="/photography"
                        hideHoverEffects
                        titleTag="Photography"
                        imageTitleText="Photography"
                        imageName="involvement-roofing.jpg"
                        boxHeight="200px"
                        hideLeft
                        showImage
                        imageWidth="-webkit-fill-available"
                    />
                </div>
                <div className="section-grid">
                    <Box
                        hideHoverEffects
                        titleTag="UI/UX"
                        showImage
                        imageName="involvement-xe.png"
                        imageWidth="-webkit-fill-available"
                        hideLeft
                        boxHeight="200px"
                        imageTitleText="UI/UX"
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionInvolvement;
