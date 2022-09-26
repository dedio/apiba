require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000 ,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
}