import styled from "styled-components";
import Chart, { DoughnutController } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChartsStyle = styled.section `

`

const data = {
    labels: [
        'Tout à fait d\'accord',
        'D\'accord',
        'Mitigé',
        'Pas d\'accord',
        'Pas du tout d\'accord',
        'Aucune idée',
        "Je ne souhaite pas répondre"
    ],

    datasets: [{
        label: 'Les statistiques',
        data: [20, 40, 5, 10, 10, 5, 10],
        backgroundColor: [
            '#008000',
            '#2BD121',
            '#FF8C00',
            '#990A00',
            '#E82300',
            '#FFFFFF',
            '#000000'
        ],
        borderColor: [
            '#008000',
            '#2BD121',
            '#FF8C00',
            '#990A00',
            '#E82300',
            '#000000',
            '#000000'
        ],
    }]
    
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
          display:  false,
        }
      }
    },
  };

  

export default function PieCharts() {
    return (
        <>
        <Doughnut data={data} options={{
          plugins: {
            legend: {
              display: true,

            },
            tooltip: {
              enabled: true
            }
          },rotation: -90,
          circumference: 360,
          cutout: "70%",
          maintainAspectRatio: true,
          responsive: true
        }} >

        </Doughnut>
        </>
    )
}