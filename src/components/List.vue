<template>
  <div class="list">
    <h2>Lists Lists Lists</h2>
    <div v-if="realTime">
      <p 
        v-for="(value, key) in realTime"
        :key="key"
        :value="value"
      >
        {{ key }}: {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
import AlphaVantage from '../services/AlphaVantage.js';

export default {
  data() {
    return {
      realTime: null,
      loading: false,
      error: null,
      search: '',
      total: 0
    };
  },
  created() {
    this.sectors = AlphaVantage.getSectors();
    this.handleSearch();

  },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchSectors();
    },

    searchSectors() {
      this.loading = true;
      this.error = null;

      AlphaVantage.getSectors()
        .then(response => {
          console.log(response);
          this.realTime = response['Rank A: Real-Time Performance'];
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
  }

};
</script>

<style>

</style>
