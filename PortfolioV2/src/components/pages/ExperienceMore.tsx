import { Link } from "react-router-dom";

function ExperienceMore() {
    return (
        <>
            <div className="background"></div>
            <div className="more-section">
                <Link className="back-button" to="/">
                    Back
                </Link>
                <div>
                    <h1 className="gradient-text">Experience</h1>
                </div>
            </div>
        </>
    );
}

export default ExperienceMore;
