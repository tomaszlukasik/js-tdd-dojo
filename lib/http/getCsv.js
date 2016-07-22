module.exports = response => {
    if (response.statusCode === 200) {
        return response.body;
    }
    return '';
};
