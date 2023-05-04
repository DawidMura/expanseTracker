import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value); // transform dataPoint objects to array of numbers (dataPointValues)
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
        // maxValue => maximum value represented by a chart (across all months)
      ))}
    </div>
  );
};
export default Chart;
