var axios = require('axios');
const aws = require('../services/aws.js');

module.exports = {
    funcional: async (req, res, err) => {
      try {
        axios(aws['conf_health'])
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