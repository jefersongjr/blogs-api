const throwError = (status, message) => {
    const errorMessage = { status, message };
    throw errorMessage;
};

module.exports = { throwError };