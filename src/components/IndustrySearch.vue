<template>
  <form @submit.prevent="handleSubmit">
    
    <select v-model="industryTime">
      <option disabled value="">Select Time Period</option>
      <option value="Rank A: Real-Time Performance">Real-Time</option>
      <option value="Rank B: 1 Day Performance">1 Day</option>
      <option value="Rank C: 5 Day Performance">5 Day</option>
      <option value="Rank D: 1 Month Performance">1 Month</option>
      <option value="Rank E: 3 Month Performance">3 Month</option>
      <option value="Rank F: Year-to-Date (YTD) Performance">Year-to-Date</option>
      <option value="Rank G: 1 Year Performance">1 Year</option>
      <option value="Rank H: 3 Year Performance">3 Year</option>
      <option value="Rank I: 5 Year Performance">5 Year</option>
      <option value="Rank J: 10 Year Performance">10 Year</option>
    </select>

    <button>Go</button>
  </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      industryTime: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.industryTime);
      this.onSearch(this.industryTime);
    }
  }
};
</script>

<style scoped>

select {
  padding: 8px;
  border-radius: 8px;
  margin-right: 4px;
  cursor: pointer;
}

button {
  padding: 6px;
  border-radius: 8px;
  margin-right: 4px;
  cursor: pointer;

}

</style>
