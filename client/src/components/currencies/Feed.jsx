import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Feed = ({ selectedCurrency }) => {
  // Mock data for currency demand
  const demandData = {
    USD: 500,
    EUR: 450,
    GBP: 400,
    JPY: 300,
    AUD: 250,
    CAD: 200,
    CHF: 150,
    CNY: 350,
    HKD: 100,
    INR: 50,
  };

  // Prepare data for Chart.js
  const data = {
    labels: Object.keys(demandData),
    datasets: [
      {
        label: "Demand (in million transactions)",
        data: Object.values(demandData),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.7)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      title: {
        display: true,
        text: `Demand for Currencies - ${selectedCurrency}`,
        font: {
          size: 18,
        },
        color: "#333",
      },
      legend: {
        labels: {
          font: {
            size: 12,
          },
          color: "#444",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.raw} million transactions`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#555",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#555",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
    <div className="flex-grow p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Currency Demand Graph
      </h2>
      <div className="relative h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Feed;
