import Box, { IBox } from "./Box";

function BoxesDisplay({ boxesData }: { boxesData: IBox[] }) {
    return (
        <div>
            {boxesData &&
                boxesData.map((boxItem) => {
                    return <Box {...boxItem} />;
                })}
        </div>
    );
}

export default BoxesDisplay;
