var axios = require('axios');
const { config } = require('../middlewares/aws')

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