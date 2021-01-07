<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ["7月", "8月", "9月", "10月", "11月", "12月"],
        datasets: [
          {
            type: "line",
            label: "",
            borderColor: "#FFFFFF",
            pointBackgroundColor: "#FFFFFF",
            backgroundColor: "#ffffff00",
            borderWidth: 1,
            data: [96, 84, 80, 89, 80, 91],
          },
          {
            label: "月份",
            backgroundColor: "rgb(201, 160, 115)",
            data: [96, 84, 80, 89, 80, 91],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                min: 70,
              },
            },
          ],
        },
      }
    );
  },
};
</script>
