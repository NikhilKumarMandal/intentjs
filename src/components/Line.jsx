// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { linearChatData } from "../utils/FakeData";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function LineGraph() {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "#ffffff"
//         }
//       },
//       title: {
//         display: true,
//         text: "Framework Comparison: Express vs Fastify vs Hono vs Intent",
//         color: "#ffffff",
//         font: {
//           size: 16
//         }
//       }
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#cccccc"
//         },
//         grid: {
//           color: "#333333"
//         }
//       },
//       y: {
//         beginAtZero: true,
//         max: 11,
//         ticks: {
//           color: "#cccccc"
//         },
//         grid: {
//           color: "#333333"
//         }
//       }
//     }
//   };

//   return (
//     <div className="w-full h-[300px] sm:h-[400px]">
//       <Line options={options} data={linearChatData} />
//     </div>
//   );
// }

// export default LineGraph;

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      title: {
        display: true,
        text: "Framework Comparison: Express vs Fastify vs Hono vs Intent",
        align: "center",
        color: "#ffffff",
        font: (ctx) => {
          const width = ctx.chart.width;
          // Scale font size with chart width, clamp it between 14 and 30
          const size = Math.max(14, Math.min(30, width / 25));
          return {
            size,
            family: "Inter, sans-serif",
            weight: "bold",
            lineHeight: 1.5
          };
        },
        padding: {
          top: 20,
          bottom: 10
        },
        fullSize: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Frameworks",
          color: "#ffffff",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        ticks: {
          color: "#cccccc",
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          color: "#333333",
        },
      },
      y: {
        beginAtZero: true,
        max: 11,
        title: {
          display: true,
          text: "Performance Score",
          color: "#ffffff",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        ticks: {
          stepSize: 1,
          color: "#cccccc",
        },
        grid: {
          color: "#333333",
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div className="w-85 sm:w-120 md:w-130 lg:w-120 xl:w-140 h-70 sm:h-80 md:h-90 lg:h-100 xl:h-110">
      <Line options={options} data={linearChatData} />
    </div>
  );
}

export default LineGraph;
