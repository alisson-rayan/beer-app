<template>
  <div class="logged-layout">
    <HeaderTop />
    <slot />
  </div>
</template>

<script>
import HeaderTop from './Header'

export default {
  name: 'logged-layout',
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss">

</style>