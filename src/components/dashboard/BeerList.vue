<template>
  <PgCard class="beer-list">
    <div class="card-header">
      <div class="texts">
        <h1>Current Temperatures of Beers in Transit</h1>
        <p>Status of beer containers in delivery truck (updated every 3s)</p>
      </div>
      <PgButton class="dashboard-btn" icon="plus" type="ghost" @click="addBeer()">
        Add beer
    </PgButton>
    </div>

    <div v-if="isEmpty" class="empty-state">
      <img src="../../assets/images/empty.svg" alt="empty">
      <span class="message">No beer added!</span>
    </div>

    <transition-group v-else class="selected-beers" name="beer-list" tag="div">
      <BeerCard v-for="beer in selectedBeers" :key="beer.id" :beerInfo="beer" />
    </transition-group>
  </PgCard>
</template>

<script>
import PgCard from '@/components/ds/PgCard.vue'
import PgButton from '@/components/ds/PgButton.vue';
import BeerCard from './BeerCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'beer-list',
  components: {
    PgCard,
    PgButton,
    BeerCard
  },
  computed: {
    ...mapState({
      selectedBeers: (state) => state.selectedBeers,
      beerList: (state) => state.beerList
    }),
    isEmpty() {
      return !this.selectedBeers.length;
    }
  },
  methods: {
    ...mapActions([
      'addNewBeer'
    ]),
    addBeer() {
      if (this.beerList?.length > this.selectedBeers?.length) {
        this.addNewBeer()
      } else {
        alert(`You dont't have more beers to add!`)
      }
    }
  }
}
</script>

<style lang="scss">
.beer-list {
  margin-bottom: 16px;

  & > .card-header {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 0 20px;
    margin-bottom: 48px;

    & > .texts {
      margin-right: 24px;
      & > h1 {
        font-family: 'Poppins';
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        margin-bottom: 12px;
        color: $primary-text-color;

        @include media(xl) {
          font-size: 30px;
        }
      }
  
      & > p {
        font-family: 'Poppins';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        color: $secondary-text-color;

        @include media(xl) {
          font-size: 20px;
        }
      }
    }
  }

  & > .empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 24px;

    & > img {
      width: 140px;
    }

    & > .message {
      font-family: 'Poppins';
      color: $text-color-light;
      font-weight: 400;
      font-size: 14px;
    }
  }

  & > .selected-beers {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @include media(xl) {
      gap: 32px;
    }

    & > .beer-card {
      width: 100%;

      @include media(md) {
        width: calc(50% - 8px);
      }

      @include media(lg) {
        width: calc(100%/3 - 12px);
      }

      @include media(xl) {
        width: calc(100%/3 - 22px);
      }
    }
  }
}
</style>