const axios = require('axios');
axios
  .get('https://api.github.com/users', { rejectUnauthorized: false })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
