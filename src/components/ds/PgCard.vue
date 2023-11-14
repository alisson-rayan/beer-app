<template>
  <div class="pg-card">
    <slot />
  </div>
</template>

<style lang="scss">
.pg-card {
  border-radius: 16px;
  background: $white-color-high;
  padding: 16px;

  @include media(sm) {
    padding: 24px 48px;
  }
}
</style>