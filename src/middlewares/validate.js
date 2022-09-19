module.exports = (scheme) => {

    return (req, res, next) => {

        let result = scheme.validate(req.query)
        console.log(result)
        if (result.error) {
            next(result.error)
        } else {
            next()
        }
    }

}
