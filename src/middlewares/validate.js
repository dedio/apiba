// #### PARA REVISAR #### NO FUNCA
module.exports = (scheme) => {

    return (req, res, next) => {
        let result = scheme.validate(req.body)
        //try {
        //    let result = scheme.validate(req.body)
        //} catch (error) {
        //    next(result.error)
        //} finally {
        //    next()
        //}
        if (result.error) {
            next(result.error)
        } else {
            next()
        }
    }
}
