import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top Revenue Product',
      },
    },
  };

export const data = {
  labels: ["Fresh Vegetable", "Cooking Essentials", "Drinks", "Organic Food"],
  datasets: [
    {
      label: "# of Votes",
      data: [23, 54, 10, 90],
      backgroundColor: ["#10b981", "#3b82f6", "#f97316", "#0ea5e9"],
      borderColor:  ["#10b981", "#3b82f6", "#f97316", "#0ea5e9"],
      borderWidth: 1,
    },
  ],
};

export function PirChart() {
  return <Pie options={options} data={data} />;
}
