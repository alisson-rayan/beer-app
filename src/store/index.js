import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedBeers: [],
    beerList: [
      {
        name: 'Witbier',
        minTemperature: 3,
        maxTemperature: 5,
        id: 1
      },
      {
        name: 'Stout',
        minTemperature: 6,
        maxTemperature: 8,
        id: 2
      },
      {
        name: 'IPA',
        minTemperature: 4,
        maxTemperature: 6,
        id: 3
      },
    ]
  },
  getters: {
  },
  mutations: {
    UPDATE_BEER(state, payload) {
      const beerIndex = state.selectedBeers.findIndex(beer => beer.id == payload.id);
      
      if (beerIndex !== -1) {
        state.selectedBeers[beerIndex].temperature = payload.temperature;
  
        if (!state.selectedBeers[beerIndex].history) {
          state.selectedBeers[beerIndex].history = [];
        }
  
        state.selectedBeers[beerIndex].history.push({
          timestamp: new Date(),
          temperature: payload.temperature
        });
      }
    },
    ADD_BEER(state) {
      const selectedIDs = new Set(state.selectedBeers.map(beer => beer.id));
  
      const newBeer = state.beerList.find(beer => !selectedIDs.has(beer.id));
  
      if (newBeer) {
        state.selectedBeers.push({ ...newBeer, history: [] });
      }
    },
    DELETE_BEER(state, id) {
      state.selectedBeers = state.selectedBeers.filter(beer => beer.id !== id);
    }
  },
  actions: {
    addNewBeer({ commit }) {
      commit('ADD_BEER')
    },
    deleteBeerAct({ commit }, id) {
      commit('DELETE_BEER', id)
    },
    async getTemperature({ commit }, id) {
      try {
        let response = await fetch(`https://hasydbj5c4gpa2oozfpjpc677a0hxuob.lambda-url.ap-southeast-2.on.aws/sensor/${id}`)
        response = await response.json()

        commit('UPDATE_BEER', response)
      } catch (err) {
        console.log(err);
      }
  },
  },
  modules: {
  }
})
