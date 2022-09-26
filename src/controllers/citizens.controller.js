const { response } = require('express');
var axios = require('axios');
const aws = require('../services/aws.js');

module.exports = {
    funcional: async (req, res) => {
        aws['conf_citizens'].data = {
            country: req.query.country,
            docNumber: req.query.docNumber,
            docType: req.query.docType,
            gender: req.query.gender
        }
        try {
            console.log(aws['conf_citizens'])
            axios(aws['conf_citizens'])
                .then(function (response) {
                    console.log(JSON.stringify(response));
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