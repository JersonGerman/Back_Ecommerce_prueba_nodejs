class Response {
    
    constructor() {}

    success(res, body, statusCode = 200) {
        res.status(statusCode).json({
            status: 'success',
            body,
        });
    }

    error(res, body, statusCode = 500) {
        res.status(statusCode).json({
            status: 'error',
            body,
        });
    }
}

module.exports = {
    Response,
}