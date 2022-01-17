const httpStatusCodes = require('./httpStatusCode')
const BaseError = require('./baseError')

class EntityNotFound extends BaseError {
    constructor(message) {
        super(EntityNotFound, httpStatusCodes.NOT_FOUND, true, message)
    }
}
module.exports = EntityNotFound
