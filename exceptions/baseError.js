class BaseError extends Error {
    constructor (name, statusCode, isOperational, message) {
        super();
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
        this.message = message;
    }
}

module.exports = BaseError;