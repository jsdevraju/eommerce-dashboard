import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Conversions This Year',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Fresh Vegetable',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 90 })),
      backgroundColor: '#10b981',
    },
    {
      label: 'Cooking Essentials',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 90 })),
      backgroundColor: '#3b82f6',
    },
    {
      label: 'Drinks',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 90 })),
      backgroundColor: '#f97316',
    },
    {
      label: 'Organic Food',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 90 })),
      backgroundColor: '#0ea5e9',
    },
  ],
};

export function VerticalBar() {
  return <Bar options={options} data={data} />;
}
