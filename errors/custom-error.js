class CustomAPIError extends Error{
    constructor(mesaage,  statusCode){
        super(message)
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, statuscode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = {createCustomError, CustomAPIError }