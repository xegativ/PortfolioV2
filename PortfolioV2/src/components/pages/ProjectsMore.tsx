import { Link } from "react-router-dom";

function ProjectsMore() {
    return (
        <>
            <div className="background"></div>
            <div className="more-section">
                <Link className="back-button" to="/">
                    Back
                </Link>
                <div>
                    <h1 className="gradient-text">Projects</h1>
                </div>
            </div>
        </>
    );
}

export default ProjectsMore;
