import { Link } from "react-router-dom";

function ViewMore({ linkTo }: { linkTo: string }) {
    return (
        <div className="view-more-wrap">
            <p className="fade-line-start"></p>
            <Link className="view-more" to={linkTo}>
                View more
            </Link>
            <p className="fade-line-end"></p>
        </div>
    );
}

export default ViewMore;
