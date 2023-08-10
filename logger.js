const logger = (req, res, next) => {
    const URL = req?.url
    const METHOD = req?.method
    const YEAR = new Date().getFullYear()
    console.log(
        URL,
        METHOD,
        YEAR,
    )
    next()
}

module.exports = {
    logger
}