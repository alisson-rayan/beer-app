<template>
  <div>
    <apexchart
      type="line"
      :options="chartOptions"
      :series="series"
      height="180px"
    ></apexchart>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'realtime',
          height: 180,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 10000
        },
        yaxis: {
          max: 10,
          min: -10,
          tickAmount: 4
        },
      },
      series: [{
        name: 'Temperature',
        data: []
      }]
    };
  },
  computed: {
    ...mapState({
      selectedBeers: state => state.selectedBeers
    })
  },
  watch: {
    selectedBeers: {
      deep: true,
      handler(newBeers) {
        this.updateChartData(newBeers);
      }
    }
  },
  methods: {
    updateChartData(newBeers) {
      this.series = newBeers.map(beer => {
        return {
          name: beer.name,
          data: beer.history.map(record => ({
            x: new Date(record.timestamp),
            y: record.temperature
          }))
        };
      });
    }
  }
};
</script>
