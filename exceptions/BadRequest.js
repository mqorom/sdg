const httpStatusCodes = require('./httpStatusCode')
const BaseError = require('./baseError')

class BadRequest extends BaseError {
    constructor(message) {
        super(BadRequest, httpStatusCodes.BAD_REQUEST, true, message)
    }
}

module.exports = BadRequest;
