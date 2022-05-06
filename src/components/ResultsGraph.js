import React from "react";
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
      text: 'Chart.js Bar Chart',
    },
  }
};


export default function ResultsGraph(props) {

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"]
  if (!props.surveyToGraph) {
    return null
  }

  console.log(props.surveyToGraph)




  const data = {
    labels,
    datasets: [
      {
        label: 'Number of People Answered True',
        
        data: props.surveyToGraph,
        backgroundColor: '#EA4444',
      }
    ]
  };


  return <Bar
    data={data}
    width={100}
    height={50}
    options={{ maintainAspectRatio: true }}
  />;
}
