function Point(props: { description: string }) {
    return (
        <div className="point">
            <p>&nbsp;•&nbsp;&nbsp;</p>
            <p className="description">{props.description}</p>
        </div>
    );
}

export default Point;
