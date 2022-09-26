const globalConstants = require('../const/globalConstants.js')

module.exports = {
    'conf_health': {
        method: 'get',
        url: 'https://3whl0d5nm4.execute-api.us-east-1.amazonaws.com/v1/health',
        headers: {},
        auth: {
            'AWS_ACCESS_KEY_ID': globalConstants.AWS_ACCESS_KEY_ID,
            'AWS_SECRET_ACCESS_KEY': globalConstants.AWS_SECRET_ACCESS_KEY
        }
    },
    'conf_citizens': {
        method: 'get',
        url: 'https://3whl0d5nm4.execute-api.us-east-1.amazonaws.com/v1/citizens',
        headers: {},
        auth: {
            'AWS_ACCESS_KEY_ID': globalConstants.AWS_ACCESS_KEY_ID,
            'AWS_SECRET_ACCESS_KEY': globalConstants.AWS_SECRET_ACCESS_KEY
        }
    }
};
