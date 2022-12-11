export class myError extends Error {
    status?: number;
    message: string;
}

export const createError = (status: number, message: string): myError => {
    const err = new myError();
    err.status = status;
    err.message = message;
    return err;
};