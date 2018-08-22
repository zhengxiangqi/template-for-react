module.exports = {
    get: ((url, callback) => {
        $.get(url, callback);
    }),
    post: ((url, data, callback) => {
        $.post(url, data, callback);
    }),
    put: ((url, data, callback) => {
        $.ajax({
            url: url,
            type: 'PUT',
            data: data,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: callback
        });
    }),
    delete: ((url, callback) => {
        $.ajax({
            url: url,
            type: 'DELETE',
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: callback
        });
    })
};
