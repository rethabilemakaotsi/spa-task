<template>
  <div>
    <h1>Currencies</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Price</th>
          <th scope="col">Move</th>
          <th scope="col">Percentage Move</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currencies" :key="item.code">
          <td>{{ item.fullName }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.move }}</td>
          <td>{{ item.pmove.toFixed(2) }}</td>
          <td>{{ new Date(item.datetime).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  computed: {
    currencies() {
      return this.$store.state.currencies
    }
  },
  async created() {
    await this.$store.dispatch('fetchSpots');
  }
};
</script>
