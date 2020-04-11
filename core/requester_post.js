const axios = require('axios');

axios({
  method: 'post',
  url: 'http://localhost:3000/user',
  data: {
    firstName: 'Oda',
    lastName: 'Nobunaga'
  }
}).then(function (response) {
  console.log(response.data);
})