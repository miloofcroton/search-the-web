<template>
  <div class="home">
    <h2>Simply The Best</h2>
    <div class="intro">
      <p>At Simply Stocks, we supply our users with up-to-the-minute information about the financial world. We're happy to provide this information free of charge because we believe anything monetary should be free!</p>
      <p>The data for our app is generously supplied by <a href="https://www.alphavantage.co/">Alpha Vantage</a>!</p>
    </div>

    <audio autoplay loop>
      <source src="../assets/simply-the-best-cut.mp3">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  background-image: url(../assets/background-3.png);
  background-size: cover;
  color: black;
  font-weight: bolder;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  padding: 10px;
}

.intro {
  margin: 10px auto;
  width: 60%;
}

a {
  color: #42b983;
}
</style>
