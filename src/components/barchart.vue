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
            label: "月份",
            backgroundColor: "#c9a175",
            data: [96, 84, 80, 89, 80, 91],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
