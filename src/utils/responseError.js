export default (res, status, message, error) => res.status(status).json({ message, error });
