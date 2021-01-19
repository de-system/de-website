<script>
import { Bar  } from "vue-chartjs";
export default {
  extends: Bar,
  props:['data','label'],
//   watch: {
//     bar () {
//       this.$data._bar.update()
//     }
//   },
   watch: {
    label: function() {
    this.$data._chart.data.datasets[0].label = this.label;
    this.$data._chart.update();
    },
    data: function() {
    this.$data._chart.data.datasets[0].data = this.data;
    this.$data._chart.update();
    }
  },
  computed: {
    label1:  function() {
      return this.label;
    },
    chartData: function() {
      return this.data;
    }
  },
  mounted() {
    this.renderBarChart();
  },
  methods:{
      renderBarChart:function(){
          this.renderChart(
      {
        labels: ["上期", "本期"],
        datasets: [
          {
            label: this.label1,
            backgroundColor: "rgb(206, 135, 64)",
            data:this.chartData,
          },
          
        ],
      },
      { responsive: false, maintainAspectRatio: false ,
    legend: {
              display: true
               },
            tooltips: {
            callbacks: {
          //  label: function(tooltipItem) {
          //         return tooltipItem.yLabel;
          //  }
    label: function(tooltipItem, data) {
      return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
    }
        }
    },
    scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                min: 0
                            }
                        }],
                    xAxes: [{
                            barPercentage: 0.7
                        }],
                },
        });
    }
  }
};
</script>
