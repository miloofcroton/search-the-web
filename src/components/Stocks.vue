<template>
  <div class="list">
    <h2>Compare Stocks</h2>
    <p>Add all of the stocks that you want to compare</p>

    <StockSearch :onSearch="handleSearch"/>
    
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Date</th>
          <th>Time of Day</th>
          <th>Price Period</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody v-if="symbolArr">
        <tr v-for="(item, index) in symbolArr" 
          :key="valueArr[index]"
        >
          <td>{{ symbolArr[index] }}</td>
          <td>{{ dateArr[index] }}</td>
          <td>{{ timeNameArr[index] }}</td>
          <td>{{ periodNameArr[index] }}</td>
          <td>${{ valueArr[index] }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="value">
      <p>The {{periodName}} value for {{symbol}} on {{date}} at {{timeName}} was {{ value }}</p>
    </div>

  </div>
</template>

<script>
import AlphaVantage from '../services/AlphaVantage.js';
import StockSearch from './StockSearch.vue';

export default {
  components: {
    StockSearch,
  },
  data() {
    return {
      realTime: null,
      loading: false,
      error: null,

      symbol: '',
      date: '',
      time: '',
      period: '',
      periodName: null,
      timeName: null,
      periodSearch: null,
      value: null,

      symbolArr: [],
      dateArr: [],
      timeNameArr: [],
      periodNameArr: [],
      valueArr: []
    };
  },
  created() {
  },
  methods: {
    handleSearch(symbol, date, time, period) {
      this.symbol = symbol;
      this.date = date;
      this.time = time;
      this.period = period;
      this.periodName = period.replace(/^[^*]+_\s*/g, '').toLowerCase();
      this.timeName = time.replace(/^[^*]+\s{1}/g, '');
      if(this.period === 'TIME_SERIES_DAILY'){
        this.periodSearch = 'Time Series (Daily)';
      }
      if(this.period === 'TIME_SERIES_WEEKLY'){
        this.periodSearch = 'Weekly Time Series';
      }
      if(this.period === 'TIME_SERIES_MONTHLY'){
        this.periodSearch = 'Monthly Time Series';
      }

      this.searchStock();
    },

    searchStock() {
      this.loading = true;
      this.error = null;

      AlphaVantage.getStock(this.symbol, this.period)
        .then(response => {
          this.value = response[this.periodSearch][this.date][this.time];
          console.log('response:', response);
          console.log('this.value:', this.value);

          this.valueArr.push(this.value);
          this.symbolArr.push(this.symbol);
          this.dateArr.push(this.date);
          this.timeNameArr.push(this.timeName);
          this.periodNameArr.push(this.periodName);

          this.value = null;
          
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

<style scoped>

table {
  margin: 5px auto;
}

h2 {
  font-size: 34px;
}

p {
  font-style: oblique;
}

th, td {
  padding: 5px;
  margin: 2px;
  font-size: 24px;
  border: 1px solid black;
}

</style>

