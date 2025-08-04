import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
if (err instanceof HttpError) {
    return res.status(err.statusCode || 500).json({
        status: err.statusCode || 500,
        message: err.message,
        data: err.data || null,
    });
}

res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message || null,
});
};