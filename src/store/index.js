// store.js
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    currencies: [],
    bookings: [],
  },
  mutations: {
    setCurrencies(state, data) {
      state.currencies = data;
    },
    setBookings(state, value) {
      state.bookings = value;
    },
  },
  actions: {
    async fetchSpots({ commit }) {
      try {
        const response = await axios.get(
          "https://api.sharenet.co.za/api/v1/px2/spots"
        );
        // console.log(response.data.spots);
        const data = response.data.spots;
        console.log(data);
        commit("setCurrencies", data);
      } catch (error) {
        console.error("Error fetching spots:", error);
      }
    },
  },
});

export default store;
