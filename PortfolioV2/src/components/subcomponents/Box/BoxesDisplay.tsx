import Box, { IBox } from "./Box";

interface IBoxesDisplayProps {
  boxesData: IBox[];
}
function BoxesDisplay(props: IBoxesDisplayProps) {
  const { boxesData } = props;
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
