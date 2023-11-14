<template>
  <div :class="`icon icon--${size}`">
    <img :src="iconPath" :alt="icon" />
  </div>
</template>

<script>
export default {
  name: 'PgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    iconPath() {
      return require(`../../assets/icons/icon--${this.icon}.svg`);
    }
  }
};
</script>

<style lang="scss">
.icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &--small {
    width: 16px;
    height: 16px;
  }

  &--medium {
    width: 24px;
    height: 24px;
  }

  &--large {
    width: 32px;
    height: 32px;
  }

  & > img {
    width: 100%;
  }
}
</style>
