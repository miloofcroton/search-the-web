<template>
  <div class="list">
    <h2>Lists Lists Lists</h2>
    <p v-if="realTime">{{ realTime['Materials'] }}</p>
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
    handleSearch() {
      // this.search = search;
      this.searchSectors();
    },

    searchSectors() {
      this.loading = true;
      this.error = null;

      AlphaVantage.getSectors()
        .then(response => {
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
