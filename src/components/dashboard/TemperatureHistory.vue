<template>
  <PgCard class="temperature-history">
    <h1 class="title">Temperature history (last hour)</h1>
    <RealtimeLineChart />
  </PgCard>
</template>

<script>
import PgCard from '../ds/PgCard.vue'
import RealtimeLineChart from './RealtimeLineChart.vue'

export default {
  name: 'temperature-history',
  components: {
    PgCard,
    RealtimeLineChart
  }
}
</script>

<style lang="scss">
.temperature-history {
  & > .title {
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    color: $primary-text-color;
  }
}
</style>