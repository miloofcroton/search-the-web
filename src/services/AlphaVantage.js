

export default {
  // return the promise, which is the final promise
  // after calling response.json(). This means:
  // 1) Web Request is made to server
  // 2) _when_ browser gets response, _then_ call the callback
  // 3) The return value of that _then_ callback is passed to the next then (outside this function)
  getSectors() {

    return fetch('https://www.alphavantage.co/query?function=SECTOR&apikey=XPMJIH1MNBTH8FE0')
      .then(response => {
        return response.json();
      });
  },
  getStock(symbol, period) {

    // url:
    // 1) protocol (https://)
    // 2) host server  (swapi.co)
    // 3) path (/api/people)
    // 4) search or query
    //    - separated from path via "?"
    //    - name=value pairs separated by "&"
    //    - use "encodeURIComponent" to escape search values:
    //    ?APIKEY=abc123&search=${encodeURIComponent(name)}

    // if(searchTerm === 'jar') return Promise.reject(new Error('meesa think that bad search'));
    return fetch(`https://www.alphavantage.co/query?function=${period}&symbol=${symbol}&apikey=XPMJIH1MNBTH8FE0`)
    
    // return fetch(`https://swapi.co/api/people?search=${encodeURIComponent(searchTerm)}`)
    /* deserialize the data to real JavaScript object! */

      .then(response => {
        return response.json();
      });
  }
};

