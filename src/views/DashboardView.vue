<template>
    <div class="dashboard-page">
      <BeerList />
      <TemperatureHistory />
    </div>
</template>

<script>
import BeerList from '@/components/dashboard/BeerList.vue'
import TemperatureHistory from '@/components/dashboard/TemperatureHistory.vue'

export default {
  components: {
    BeerList,
    TemperatureHistory
  }
}
</script>

<style>

</style>