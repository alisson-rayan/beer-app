<template>
  <button :class="['btn', type]">
    <span class="button-content">
      <span :class="['text', { '-icon': icon}]">
        <slot></slot>
      </span>
      <PgIcon v-if="icon" :icon="icon" />
    </span>
  </button>
</template>

<script>
import PgIcon from '@/components/ds/PgIcon.vue';

export default {
  components: {
    PgIcon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.btn {
  border-radius: 16px;
  box-shadow: 0px 20px 50px 0px rgba(55, 69, 87, 0.10);
  height: 64px;
  background: $white-color-high;
  border: none;
  cursor: pointer;
  padding: 8px;

  & > .button-content {
    display: flex;
    align-items: center;
    justify-content: center;

    & > .text {
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: $primary-text-color;

      &.-icon {
        margin-right: 10px;
      }
    }
  }

  &.ghost {
    background: none;
    box-shadow: none;
    height: auto;
  }
}
</style>
