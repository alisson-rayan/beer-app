<template>
  <LoggedLayout>
    <router-view class="view-wrapper"/>
  </LoggedLayout>
</template>

<script>
import LoggedLayout from "@/layouts/LoggedLayout";

export default {
  components: {
    LoggedLayout
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: $white-color-medium;
}

.view-wrapper {
  margin-left: 50px;
  padding: 16px;
  min-height: calc(100vh - 50px);

  @include media(sm) {
    margin-left: 345px;
    padding: 24px;
    min-height: calc(100vh - 120px);
  }
}
</style>
