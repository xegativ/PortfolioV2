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
                        titleTag="2019 — 2022"
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
                        titleTag="2021 — 2023"
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
                        titleTag="2022 — Present"
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
                        titleTag="2023 — Present"
                        showImage
                        imageName="uiux.png"
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
