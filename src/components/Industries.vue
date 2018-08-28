<template>
  <div class="list">

    <h2>Industry Growth Info</h2>

    <IndustrySearch 
      :onSearch="handleSearch"
    />

    <h3 v-if="industryName">All Industries, by {{ industryName }}</h3>

    <div v-if="industryTime">
      <table>
        <thead>
          <th>Industry</th>
          <th>Growth</th>
        </thead>
        <tbody>
          <tr 
            v-for="(value, key) in this.data"
            :key="key"
            :value="value"
          >
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import AlphaVantage from '../services/AlphaVantage.js';
import IndustrySearch from './IndustrySearch.vue';

export default {
  components: {
    IndustrySearch,
  },
  data() {
    return {
      industryTime: null,
      industryName: null,
      loading: false,
      error: null,
      data: null
    };
  },
  created() {
    this.sectors = AlphaVantage.getSectors();
    this.searchSectors();
  },
  methods: {
    handleSearch(industryTime) {
      this.industryTime = industryTime;
      this.industryName = industryTime.replace(/^[^:]+:\s*/g, '');

      this.searchSectors();
    },

    searchSectors() {
      this.loading = true;
      this.error = null;

      AlphaVantage.getSectors()
        .then(response => {
          this.data = response[this.industryTime];
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    },

  }

};
</script>

<style scoped>

table {
  margin: 5px auto;
}

h3 {
  font-size: 36;
}

th, td {
  padding: 5px;
  font-size: 24px;
  border: 1px solid black;
}


</style>
