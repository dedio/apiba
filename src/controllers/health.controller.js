module.exports = {
    funcional: async (req, res) => {
        try {
            console.log('Estado funcional')

            res.json({
                status: "healthy"
            })
        } catch (err) {
            console.log(err)
        }
    }
}