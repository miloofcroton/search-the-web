<template>
  <form @submit.prevent="handleSubmit">
    <div class="form">
      <p>Symbol:</p>
      <input v-model="symbol" placeholder="GOOG" required>
      
      <p>Time Period:</p>
      <select v-model="period" required>
        <option disabled value="">Please select one</option>
        <option value="TIME_SERIES_DAILY">Daily</option>
        <option value="TIME_SERIES_WEEKLY">Weekly</option>
        <option value="TIME_SERIES_MONTHLY">Monthly</option>
      </select>

      <p>Date (ex: "2018-08-27"):</p>
      <input v-model="date" type="date" placeholder="2018-08-27" required>
      
      <p>Time of Day:</p>
      <select v-model="time" required>
        <option disabled value="">Please select one</option>
        <option value="1. open">Open</option>
        <option value="2. high">High</option>
        <option value="3. low">Low</option>
        <option value="4. close">Close</option>
      </select>
    </div>

    <button type="submit">Add</button>
    <button type="reset">Reset</button>
  </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      symbol: '',
      period: '',
      date: '',
      time: '',
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.symbol, this.date, this.time, this.period);
      this.symbol = '';
      this.period = '';
      this.date = '';
      this.time = '';
    }
  }
};
</script>

<style>

div.form {
  width: 50%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: auto auto;
}

div.form p {
  justify-self: end;
  margin: 10px;
}
div.form input,select {
  justify-self: start;
}


form {
  padding: 20px;  
}

select {
  padding: 8px;
  border-radius: 8px;
  margin-right: 4px;
  cursor: pointer;
}

input {
  padding: 6px;
  border-radius: 6px;
}

button {
  padding: 6px;
  border-radius: 8px;
  margin-right: 4px;
  cursor: pointer;
  width: 60px;
}

button:hover {
  background: grey;
}

</style>
