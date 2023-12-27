import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      data: [30, 40, 30], // Example data values
      backgroundColor: ["#FF6384", "#36A2EB', '#FFCE56"], // Example colors
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};


const DoughnutChart = () => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};


export default DoughnutChart;