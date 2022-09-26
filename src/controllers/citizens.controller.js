const { response } = require('express');
var axios = require('axios');
const aws = require('../services/aws.js');

module.exports = {
    funcional: async (req, res) => {

        let country = req.query.country
        let docNumber = req.query.docNumber
        let docType = req.query.docType
        let gender = req.query.gender
        query = '?country=' + country + '&docNumber=' + docNumber + '&docType=' + docType + '&gender=' + gender
        aws['conf_citizens'].url = aws['conf_citizens'].url.concat(query)
        try {
            console.log(aws['conf_citizens'])
            //console.log("qwerqwer")
            axios(aws['conf_citizens'])
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            res.json({
                status: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}