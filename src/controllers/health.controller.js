module.exports = {
    funcional: async (req, res, err) => {
        try {
            res.json({
                status: "healthy"
            })
        } catch (err) {
            console.log(err)
        }
    }
}