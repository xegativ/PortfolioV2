import { Link } from "react-router-dom";

interface IViewMoreProps {
  to: string;
}
function ViewMore(props: IViewMoreProps) {
  const { to } = props;
  return (
    <div className="view-more-wrap">
      <p className="fade-line-start"></p>
      <Link className="view-more" to={to}>
        View more
      </Link>
      <p className="fade-line-end"></p>
    </div>
  );
}

export default ViewMore;
