
var axios = require('axios');

var config = {
method: 'get',
  url: 'https://3whl0d5nm4.execute-api.us-east-1.amazonaws.com/v1/citizens',
  headers: { },
  auth: {
    'AWS_ACCESS_KEY_ID': '',
    'secretAccessKey': ''
  }
};

module.exports = {
    funcional: async (req, res, err) => {
        try {
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
           console.log(error);
          });
          res.json({
              status: "healthy"
          })
        } catch (err) {
            console.log(err)
        }
    }
}