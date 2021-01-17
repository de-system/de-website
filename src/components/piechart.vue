<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    //
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    this.renderChart(
      {
        labels: [
          "20歲以下",
          "20-25歲",
          "25-30歲",
          "30-35歲",
          "35-40歲",
          "40-45歲",
          "45-50歲",
        ],
        datasets: [
          {
            backgroundColor: [
              this.gradient,
              this.gradient2,
              "#00D8FF",
              "#F2D31F",
              "#FC7921",
              "#4421FC",
              "#E3D7F2",
            ],
            data: [1, 5, 8, 3, 3, 1, 6],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
