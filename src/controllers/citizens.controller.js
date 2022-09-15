module.exports = {
    funcional: async (req, res) => {
        let country = req.query.country
        let docNumber = req.query.docNumber
        let docType = req.query.docType
        let gender = req.query.gender
        try {
            console.log('Estado funcional')

            res.json({
                status: "citizens",
                country: country,
                docNumber: docNumber,
                docType: docType,
                gender: gender
            })
        } catch (err) {
            console.log(err)
        }
    }
}