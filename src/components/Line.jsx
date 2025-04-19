import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { linearChatData } from "../utils/FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff" 
        }
      },
      title: {
        display: true,
        text: "Framework Comparison: Express vs Fastify vs Hono vs Intent",
        color: "#ffffff", 
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#cccccc" 
        },
        grid: {
          color: "#333333" 
        }
      },
      y: {
        beginAtZero: true,
        max: 11,
        ticks: {
          color: "#cccccc" 
        },
        grid: {
          color: "#333333"
        }
      }
    }
  };

  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <Line options={options} data={linearChatData} />
    </div>
  );
}

export default LineGraph;
