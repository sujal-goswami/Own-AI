class ApiResponse {
    constructor(statusCode, data, message, success) {
        this.statusCode = statusCode < 400;
        this.data = data;
        this.message = message;
        this.success = success;
    }
}

export {ApiResponse}