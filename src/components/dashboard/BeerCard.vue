<template>
  <div v-if="isLoaded" :class="['beer-card', { '-danger': isOutOfTemperature}]">
    <div class="beer-info">
      <span class="current-temperature">
        {{ beerInfo.temperature }}ºC
      </span>

      <span class="range-temperature">
        {{ rangeTemperature }}
      </span>

      <span class="beer-name">
        {{ beerInfo.name }}
      </span>
    </div>

    <img class="beer-img" :src="beerImg" :alt="beerInfo.name">

    <PgButton class="delete-btn" icon="close" type="ghost" @click="deleteBeer()"></PgButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PgButton from '@/components/ds/PgButton';

export default {
  components: {
    PgButton
  },
  data() {
    return {
      temperatureInterval: null,
      isLoaded: false
    };
  },
  props: {
    beerInfo: {
      type: Object,
      required: true
    }
  },
  async mounted() {
    await this.getTemperature(this.beerInfo?.id);

    this.temperatureInterval = setInterval(async () => {
      await this.getTemperature(this.beerInfo?.id);
    }, 3000);

    // TODO: add an loading state here
    this.isLoaded = true
  },
  unmounted() {
    if (this.temperatureInterval) {
      clearInterval(this.temperatureInterval);
    }
  },
  computed: {
    rangeTemperature() {
      return `(${this.beerInfo?.minTemperature}-${this.beerInfo?.maxTemperature}ºC)`
    },

    beerImg() {
      return require(`../../assets/images/${this.beerInfo?.name}.svg`)
    },

    isOutOfTemperature() {
      return this.beerInfo?.temperature > this.beerInfo?.maxTemperature || this.beerInfo?.temperature < this.beerInfo?.minTemperature
    }
  },
  methods: {
    ...mapActions([
      'getTemperature',
      'deleteBeerAct'
    ]),

    deleteBeer() {
      this.deleteBeerAct(this.beerInfo?.id);
    }
  }
}
</script>

<style lang="scss">
.beer-card {
  padding: 16px;
  border-radius: 16px;
  background: $positive-color;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;
  position: relative;
  
  @include media(md) {
    padding: 32px;
  }

  &.-danger {
    background: $negative-color;
  }

  & > .beer-info {
    display: flex;
    flex-direction: column;
    margin-right: 8px;

    & > .current-temperature {
      font-family: 'Poppins';
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 8px;
      color: $primary-text-color;
      min-width: 90px;
    }

    & > .range-temperature {
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      color: $secondary-text-color;
      margin-bottom: 48px;
    }

    & > .beer-name {
      font-family: 'Poppins';
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      color: $primary-text-color;
    }
  }

  & > .beer-img {
    width: 70px;
    @include media(md) {
      width: 90px;
    }
  }

  & > .delete-btn {
    position: absolute;
    right: -16px;
    top: -16px;

    & > .button-content {
      & > .icon {
        border-radius: 50%;
        background: $white-color-high;
      }
    }
  }
}

.beer-list-enter-active, .beer-list-leave-active {
  transition: opacity 0.5s;
}
.beer-list-enter, .beer-list-leave-to {
  opacity: 0;
}
</style>