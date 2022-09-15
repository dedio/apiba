const Joi = require('joi')

let consultaCitizen = Joi.object().keys({
    country: Joi.string().required(),
    docNumber: Joi.string().required(),
    docType: Joi.string().required(),
    gender: Joi.string().required()
})

module.exports = {
    consultaCitizen
}