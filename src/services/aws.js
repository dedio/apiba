const globalConstants = require('../const/globalConstants.js')
var crypto = require("crypto-js");

const formatXAmzDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let milseconds = d.getMilliseconds();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return year + month + day + 'T' + hours + minutes + seconds + 'Z';
}

const formatAutDate = (date) => {
    let d = new Date(date);
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return year + month + day;
}

function getSignatureKey(key, dateStamp, regionName, serviceName) {
    var kDate = crypto.HmacSHA256(dateStamp, "AWS4" + key);
    var kRegion = crypto.HmacSHA256(regionName, kDate);
    var kService = crypto.HmacSHA256(serviceName, kRegion);
    var kSigning = crypto.HmacSHA256("aws4_request", kService);
    return kSigning;
}

module.exports = {
    'conf_health': {
        method: 'get',
        url: 'https://3whl0d5nm4.execute-api.us-east-1.amazonaws.com/v1/health',
        headers: {
            'X-Amz-Date': formatXAmzDate(Date()),
            'Authorization': 'AWS4-HMAC-SHA256 Credential='
                + globalConstants.AWS_ACCESS_KEY_ID + '/'
                + formatAutDate(Date())
                + '/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature='
                + getSignatureKey(
                    globalConstants.AWS_SECRET_ACCESS_KEY,
                    formatXAmzDate(Date()),
                    globalConstants.regionName,
                    globalConstants.serviceName
                )
        }/*,
        auth: {
            'AWS_ACCESS_KEY_ID': globalConstants.AWS_ACCESS_KEY_ID,
            'AWS_SECRET_ACCESS_KEY': globalConstants.AWS_SECRET_ACCESS_KEY
        }*/
    },
    'conf_citizens': {
        method: 'get',
        url: 'https://3whl0d5nm4.execute-api.us-east-1.amazonaws.com/v1/citizens',
        headers: {
            'X-Amz-Date': formatXAmzDate(Date()),
            'Authorization': 'AWS4-HMAC-SHA256 Credential='
                + globalConstants.AWS_ACCESS_KEY_ID + '/'
                + formatAutDate(Date())
                + '/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature='
                + getSignatureKey(
                    globalConstants.AWS_SECRET_ACCESS_KEY,
                    formatXAmzDate(Date()),
                    globalConstants.regionName,
                    globalConstants.serviceName
                )
        },
        data: {}/*,
        auth: {
            'AWS_ACCESS_KEY_ID': globalConstants.AWS_ACCESS_KEY_ID,
            'AWS_SECRET_ACCESS_KEY': globalConstants.AWS_SECRET_ACCESS_KEY
        }*/
    }
};
